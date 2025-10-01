import { Component, OnInit, ElementRef } from '@angular/core';
// import { DemoService, AssetTraceability } from '../../demoservice.service';
import { AssetTraceabilityService } from '../asset-traceability.service';
import { AssetTraceability } from '../demoservice.service';
import { LegendPosition } from '@swimlane/ngx-charts';
import { ColorHelper } from '@swimlane/ngx-charts';

import * as d3 from 'd3'; // Added D3.js import


@Component({
  selector: 'app-view-statistics',
  templateUrl: './view-statistics.component.html',
  styleUrls: ['./view-statistics.component.css']
})
export class ViewStatisticsComponent implements OnInit {
  assets: any[] = [];
  assetTypesData: any[] = [];
  assetTypesDataFiltered: any[] = [];
  complianceStatusData: any[] = [];
  bubbleChartData: any[] = [];
  customColorScheme: any = {
    name: 'custom',
    selectable: true,
    group: 'Ordinal',
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  private svg: any; // Added for D3 SVG reference
  private width = 300; // Chart width
  private height = 300; // Chart height
  private margin = 20; // Margin for chart


  // for odometer chart
  gaugeValue: number = 0; // Initialize the gauge value
  gaugeLabel: string = "Overall Compliance (%)";
  gaugeThresholds = {
    '0': { color: 'red' },
    '40': { color: 'orange' },
    '60': { color: 'yellow' },
    '80': { color: 'green' }
  };


  constructor(private assetTraceAbilityService: AssetTraceabilityService, private elRef: ElementRef) { }

  // ngOnInit(): void {
  //   this.assetTraceAbilityService.getAssets().subscribe((data) => {
  //     this.assets = data;
  //     this.processChartData();
  //     this.processBubbleChartData();
  //   });
  // }

  ngOnInit(): void {
    this.assetTraceAbilityService.getAssets().subscribe((data) => {
      console.log("API raw data:", data);
      if (data && data.length) { // Check if data is available
        this.assets = data;
        this.processChartData();
        this.processBubbleChartData();

        this.processCircleChartData();
        this.createSvg(); // Added to initialize D3 SVG
        this.drawComplianceChart(); // Added to draw D3 circular chart

      } else {
        console.warn("No asset data available.");
      }
    });
  }

  bubbleChartOptions = {
    view: [800, 600] as [number, number],
    showLegend: true,
    // legendPosition: 'right'as const,
    legendPosition: LegendPosition.Right,
    showXAxis: true,
    showYAxis: true,
    xAxisLabel: 'OU',
    yAxisLabel: 'Compliance',
    // colorScheme: {
    //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'] 
    // },
    colorScheme: this.customColorScheme
  };

  processChartData() {
    // Sample data processing for Asset Types and Compliance Status
    this.assetTypesData = [
      { name: 'Product Platform', value: this.assets.filter(a => a.assetType === 'Product Platform').length },
      { name: 'Solution', value: this.assets.filter(a => a.assetType === 'Solution').length },
      { name: 'Code-Based', value: this.assets.filter(a => a.assetType === 'Code-Based').length },
      { name: 'Non Code-Based', value: this.assets.filter(a => a.assetType === 'Non Code-Based').length }
    ];

    this.complianceStatusData = [
      { name: 'Compliant', value: this.assets.filter(a => a.complianceStatus === 'compliant').length },
      { name: 'Non-Compliant', value: this.assets.filter(a => a.complianceStatus === 'non-compliant').length }
    ];

    // Calculate counts for compliance status
    const compliantCount = this.assets.filter(a => a.complianceStatus === 'compliant').length;
    const nonCompliantCount = this.assets.filter(a => a.complianceStatus === 'non-compliant').length;
    const total = compliantCount + nonCompliantCount;
    this.gaugeValue = total > 0 ? (compliantCount / total) * 100 : 0;

  }

  processBubbleChartData() {
    // Transform data to fit the bubble chart format with three legends
    this.bubbleChartData = [
      {
        name: "OU Compliance",
        series: this.assets.map(asset => ({
          name: `${asset.ouName || "Unknown"} - Type: ${asset.assetType || "N/A"} - Brand: ${asset.brandName || "N/A"}`,
          x: asset.complianceScore || Math.random() * 100, // Compliance score for x-axis
          y: asset.assetCount || Math.random() * 100,      // Asset count for y-axis
          r: Math.sqrt(asset.assetCount || 1) * 10        // Radius size of the bubble, scaled for visibility
        }))
      }
    ];

    console.log("Processed Bubble Chart Data:", this.bubbleChartData);
  }


  processCircleChartData() {
    // Calculate compliance percentage for each asset type
    this.assetTypesDataFiltered = [
      {
        name: 'Product Platform',
        total: this.assets.filter(a => a.assetType === 'Product Platform').length,
        compliant: this.assets.filter(a => a.assetType === 'Product Platform' && a.complianceStatus === 'compliant').length
      },
      {
        name: 'Solution',
        total: this.assets.filter(a => a.assetType === 'Solution').length,
        compliant: this.assets.filter(a => a.assetType === 'Solution' && a.complianceStatus === 'compliant').length
      },
      {
        name: 'Code-Based',
        total: this.assets.filter(a => a.assetType === 'Code-Based').length,
        compliant: this.assets.filter(a => a.assetType === 'Code-Based' && a.complianceStatus === 'compliant').length
      },
      {
        name: 'Non Code-Based',
        total: this.assets.filter(a => a.assetType === 'Non Code-Based').length,
        compliant: this.assets.filter(a => a.assetType === 'Non Code-Based' && a.complianceStatus === 'compliant').length
      }
    ];
    console.log("Asset Types Data:", this.assetTypesDataFiltered);

    // Calculate compliance percentage for each asset type
    this.assetTypesDataFiltered = this.assetTypesDataFiltered.map(type => ({
      name: type.name,
      percentage: type.total > 0 ? (type.compliant / type.total) * 100 : 0
    }));

    console.log("Calculated Percentages:", this.assetTypesDataFiltered);


    const compliantCount = this.assets.filter(a => a.complianceStatus === 'compliant').length;
    // const nonCompliantCount = this.assets.filter(a => a.complianceStatus === 'non-compliant').length;
    const total = this.assets.length
    this.gaugeValue = total > 0 ? (compliantCount / total) * 100 : 0;
  }


  // Added method to create SVG for the circular chart
  private createSvg(): void {
    this.svg = d3.select(this.elRef.nativeElement).select("svg.circular-chart")
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr("transform", `translate(${this.width / 2}, ${this.height / 2})`);
  }

  // Added method to draw the circular compliance chart
  // private drawComplianceChart(): void {
  //   const radius = Math.min(this.width, this.height) / 2 - this.margin;
  //   const innerRadii = [radius * 0.6, radius * 0.7, radius * 0.8, radius * 0.9];

  //   this.assetTypesData.forEach((d, i) => {
  //       const arc = d3.arc()
  //           .innerRadius(innerRadii[i])
  //           .outerRadius(innerRadii[i] + 20)
  //           .startAngle(0)
  //           .endAngle((d.percentage / 100) * 2 * Math.PI); // Updated to use compliance percentage

  //       this.svg.append("path")
  //           .datum(d)
  //           .attr("d", arc)
  //           .attr("fill", this.customColorScheme.domain[i]);

  //       // Add label text
  //       const displayPercentage = d.percentage ? d.percentage.toFixed(2) : "0.00";

  //       this.svg.append("text")
  //           .attr("transform", `translate(0,${-innerRadii[i] - 10})`)
  //           .attr("text-anchor", "middle")
  //           .style("font-size", "12px")
  //           .style("fill", this.customColorScheme.domain[i])
  //           // .text(`${d.name}: ${d.percentage.toFixed(2)}%`); // Updated label to show compliance percentage
  //           .text(`${d.name}: ${displayPercentage}%`);

  //   });

  //  }

  private drawComplianceChart(): void {
    console.log("Drawing compliance chart with data:", this.assetTypesDataFiltered); // Debugging line

    const radius = Math.min(this.width, this.height) / 2 - this.margin;
    const ringWidth = 15; // Width of each ring
    const gap = 5; // Gap between rings

    this.assetTypesDataFiltered.forEach((d, i) => {
      const innerRadius = radius - (i + 1) * (ringWidth + gap);
      const outerRadius = innerRadius + ringWidth;

      const arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .startAngle(0)
        .endAngle((d.percentage / 100) * 2 * Math.PI);

      this.svg.append("path")
        .datum(d)
        .attr("d", arc)
        .attr("fill", this.customColorScheme.domain[i % this.customColorScheme.domain.length]);


      // Calculate label position slightly outside the ring
      //  const labelRadius = outerRadius + 10; // Offset label position by 10 pixels outside the ring
      //  const angle = (d.percentage / 100) * Math.PI; // Position the label at half of the arc's angle

      //  // Calculate x and y positions for the label
      //  const x = labelRadius * Math.sin(angle);
      //  const y = -labelRadius * Math.cos(angle);
      // Add label text with percentage
      // const displayPercentage = d.percentage ? d.percentage.toFixed(2) : "0.00";

      // this.svg.append("text")
      //     .attr("transform", `translate(${x},${y})`)
      //     .attr("text-anchor", "middle")
      //     .style("font-size", "12px")
      //     .style("fill", this.customColorScheme.domain[i % this.customColorScheme.domain.length])
      //     .text(`${d.name}: ${displayPercentage}%`);
    });
  }



}

