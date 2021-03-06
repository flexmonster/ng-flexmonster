import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import * as Flexmonster from 'flexmonster';

@Component({
  selector: 'fm-pivot',
  template: '<div style="width:100%;height:100%;"><div class="fm-ng-wrapper"></div></div>'
})
export class FlexmonsterPivot {
  // params
  @Input() toolbar: boolean;
  @Input() licenseKey: string;
  @Input() licenseFilePath: string;
  @Input() width: string | number;
  @Input() height: string | number;
  @Input() componentFolder: string;
  @Input() report: Flexmonster.Report | string;
  @Input() shareReportConnection: Flexmonster.APIClientOptions;
  @Input() global: Flexmonster.Report;
  @Input() accessibility: Flexmonster.AccessibilityOptions;
  @Input() customizeAPIRequest: (request: Object) => Object;
  @Input() customizeCell: (cell: Flexmonster.CellBuilder, data: Flexmonster.CellData) => void;
  @Input() customizeChartElement: (element: Element, data: Flexmonster.ChartData | Flexmonster.ChartLegendItemData) => void;
  @Input() customizeContextMenu: (cell: Flexmonster.ContextMenuItem[], data: Flexmonster.CellData | Flexmonster.ChartData, viewType: string) => Flexmonster.ContextMenuItem[];
  // events
  @Output() cellclick: EventEmitter<Flexmonster.CellData> = new EventEmitter();
  @Output() celldoubleclick: EventEmitter<Flexmonster.CellData> = new EventEmitter();
  @Output() chartclick: EventEmitter<Flexmonster.ChartData> = new EventEmitter();
  @Output() dataerror: EventEmitter<Object> = new EventEmitter();
  @Output() datafilecancelled: EventEmitter<Object> = new EventEmitter();
  @Output() dataloaded: EventEmitter<Object> = new EventEmitter();
  @Output() datachanged: EventEmitter<Object> = new EventEmitter();
  @Output() fieldslistclose: EventEmitter<Object> = new EventEmitter();
  @Output() fieldslistopen: EventEmitter<Object> = new EventEmitter();
  @Output() filterclose: EventEmitter<Object> = new EventEmitter();
  @Output() filteropen: EventEmitter<Object> = new EventEmitter();
  @Output() drillthroughopen: EventEmitter<Flexmonster.CellData | Flexmonster.ChartData> = new EventEmitter();
  @Output() exportcomplete: EventEmitter<Object> = new EventEmitter();
  @Output() exportstart: EventEmitter<Object> = new EventEmitter();
  @Output() drillthroughclose: EventEmitter<Object> = new EventEmitter();
  @Output() fullscreen: EventEmitter<Object> = new EventEmitter();
  @Output() loadingdata: EventEmitter<Object> = new EventEmitter();
  @Output() loadinglocalization: EventEmitter<Object> = new EventEmitter();
  @Output() loadingolapstructure: EventEmitter<Object> = new EventEmitter();
  @Output() loadingreportfile: EventEmitter<Object> = new EventEmitter();
  @Output() localizationerror: EventEmitter<Object> = new EventEmitter();
  @Output() localizationloaded: EventEmitter<Object> = new EventEmitter();
  @Output() olapstructureerror: EventEmitter<Object> = new EventEmitter();
  @Output() olapstructureloaded: EventEmitter<Object> = new EventEmitter();
  @Output() openingreportfile: EventEmitter<Object> = new EventEmitter();
  @Output() printcomplete: EventEmitter<Object> = new EventEmitter();
  @Output() printstart: EventEmitter<Object> = new EventEmitter();
  @Output() querycomplete: EventEmitter<Object> = new EventEmitter();
  @Output() queryerror: EventEmitter<Object> = new EventEmitter();
  @Output() ready: EventEmitter<Flexmonster.Pivot> = new EventEmitter();
  @Output() reportchange: EventEmitter<Object> = new EventEmitter();
  @Output() reportcomplete: EventEmitter<Object> = new EventEmitter();
  @Output() reportfilecancelled: EventEmitter<Object> = new EventEmitter();
  @Output() reportfileerror: EventEmitter<Object> = new EventEmitter();
  @Output() reportfileloaded: EventEmitter<Object> = new EventEmitter();
  @Output() runningquery: EventEmitter<Object> = new EventEmitter();
  @Output() unauthorizederror: EventEmitter<Flexmonster.UnauthorizedErrorHandler> = new EventEmitter();
  @Output() update: EventEmitter<Object> = new EventEmitter();
  @Output() beforetoolbarcreated: EventEmitter<Object> = new EventEmitter();
  @Output() beforegriddraw: EventEmitter<Object> = new EventEmitter();
  @Output() aftergriddraw: EventEmitter<Object> = new EventEmitter();
  @Output() afterchartdraw: EventEmitter<Object> = new EventEmitter();
  // api
  public flexmonster: Flexmonster.Pivot;
  // private
  private root: HTMLElement;

  constructor(el: ElementRef) {
    this.root = <HTMLElement>el.nativeElement;
  }

  ngOnInit() {
    this.flexmonster = new Flexmonster({
      container: this.root.getElementsByClassName('fm-ng-wrapper')[0],
      componentFolder: this.componentFolder,
      width: this.width,
      height: this.height,
      toolbar: this.toolbar,
      licenseKey: this.licenseKey,
      licenseFilePath: this.licenseFilePath,
      report: this.report,
      global: this.global,
      accessibility: this.accessibility,
      shareReportConnection: this.shareReportConnection,
      customizeAPIRequest: this.customizeAPIRequest,
      customizeCell: this.customizeCell,
      customizeChartElement: this.customizeChartElement,
      customizeContextMenu: this.customizeContextMenu,
      cellclick: (cell: Flexmonster.CellData) => this.cellclick.next(cell),
      celldoubleclick: (cell: Flexmonster.CellData) => this.celldoubleclick.next(cell),
      chartclick: (event: Flexmonster.ChartData) => this.chartclick.next(event),
      datachanged: (event: Object) => this.datachanged.next(event),
      dataerror: (event: Object) => this.dataerror.next(event),
      datafilecancelled: () => this.datafilecancelled.next(),
      dataloaded: () => this.dataloaded.next(),
      fieldslistclose: () => this.fieldslistclose.next(),
      fieldslistopen: () => this.fieldslistopen.next(),
      filterclose: () => this.filterclose.next(),
      filteropen: (event: Object) => this.filteropen.next(event),
      drillthroughopen: (cell: Flexmonster.CellData | Flexmonster.ChartData) => this.drillthroughopen.next(cell),
      exportcomplete: () => this.exportcomplete.next(),
      exportstart: () => this.exportstart.next(),
      drillthroughclose: () => this.drillthroughclose.next(),
      loadingdata: () => this.loadingdata.next(),
      loadinglocalization: () => this.loadinglocalization.next(),
      loadingolapstructure: () => this.loadingolapstructure.next(),
      loadingreportfile: () => this.loadingreportfile.next(),
      localizationerror: () => this.localizationerror.next(),
      localizationloaded: () => this.localizationloaded.next(),
      olapstructureerror: () => this.olapstructureerror.next(),
      olapstructureloaded: () => this.olapstructureloaded.next(),
      openingreportfile: () => this.openingreportfile.next(),
      printcomplete: () => this.printcomplete.next(),
      printstart: () => this.printstart.next(),
      querycomplete: () => this.querycomplete.next(),
      queryerror: () => this.queryerror.next(),
      ready: () => this.ready.next(this.flexmonster),
      reportchange: () => this.reportchange.next(),
      reportcomplete: () => this.reportcomplete.next(),
      reportfileloaded: () => this.reportfileloaded.next(),
      reportfilecancelled: () => this.reportfilecancelled.next(),
      reportfileerror: () => this.reportfileerror.next(),
      runningquery: () => this.runningquery.next(),
      unauthorizederror: (done: Flexmonster.UnauthorizedErrorHandler) => this.unauthorizederror.next(done),
      update: () => this.update.next(),
      beforetoolbarcreated: (toolbar: Object) => this.beforetoolbarcreated.next(toolbar),
      beforegriddraw: (event: Object) => this.beforegriddraw.next(event),
      aftergriddraw: (event: Object) => this.aftergriddraw.next(event),
      afterchartdraw: () => this.afterchartdraw.next()
    });
  }
}
