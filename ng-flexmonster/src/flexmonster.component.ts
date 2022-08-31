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
  @Input() sortFieldsList: (first: Flexmonster.FieldsListSortingItem, second: Flexmonster.FieldsListSortingItem, fieldsListType: string) => number;

  // events
  @Output() cellclick: EventEmitter<Flexmonster.CellData> = new EventEmitter();
  @Output() celldoubleclick: EventEmitter<Flexmonster.CellData> = new EventEmitter();
  @Output() chartclick: EventEmitter<Flexmonster.ChartData> = new EventEmitter();
  @Output() dataerror: EventEmitter<Flexmonster.ErrorEvent> = new EventEmitter();
  @Output() datafilecancelled: EventEmitter<void> = new EventEmitter();
  @Output() dataloaded: EventEmitter<void> = new EventEmitter();
  @Output() datachanged: EventEmitter<Object> = new EventEmitter();
  @Output() fieldslistclose: EventEmitter<void> = new EventEmitter();
  @Output() fieldslistopen: EventEmitter<void> = new EventEmitter();
  @Output() filterclose: EventEmitter<void> = new EventEmitter();
  @Output() filteropen: EventEmitter<Object> = new EventEmitter();
  @Output() drillthroughopen: EventEmitter<Flexmonster.CellData | Flexmonster.ChartData> = new EventEmitter();
  @Output() exportcomplete: EventEmitter<void> = new EventEmitter();
  @Output() exportstart: EventEmitter<void> = new EventEmitter();
  @Output() drillthroughclose: EventEmitter<void> = new EventEmitter();
  @Output() fullscreen: EventEmitter<void> = new EventEmitter();
  @Output() loadingdata: EventEmitter<void> = new EventEmitter();
  @Output() loadinglocalization: EventEmitter<void> = new EventEmitter();
  @Output() loadingolapstructure: EventEmitter<void> = new EventEmitter();
  @Output() loadingreportfile: EventEmitter<void> = new EventEmitter();
  @Output() localizationerror: EventEmitter<void> = new EventEmitter();
  @Output() localizationloaded: EventEmitter<void> = new EventEmitter();
  @Output() olapstructureerror: EventEmitter<Flexmonster.ErrorEvent> = new EventEmitter();
  @Output() olapstructureloaded: EventEmitter<void> = new EventEmitter();
  @Output() openingreportfile: EventEmitter<void> = new EventEmitter();
  @Output() printcomplete: EventEmitter<void> = new EventEmitter();
  @Output() printstart: EventEmitter<void> = new EventEmitter();
  @Output() querycomplete: EventEmitter<void> = new EventEmitter();
  @Output() queryerror: EventEmitter<Flexmonster.ErrorEvent> = new EventEmitter();
  @Output() ready: EventEmitter<Flexmonster.Pivot> = new EventEmitter();
  @Output() reportchange: EventEmitter<void> = new EventEmitter();
  @Output() reportcomplete: EventEmitter<void> = new EventEmitter();
  @Output() reportfilecancelled: EventEmitter<void> = new EventEmitter();
  @Output() reportfileerror: EventEmitter<void> = new EventEmitter();
  @Output() runningquery: EventEmitter<void> = new EventEmitter();
  @Output() unauthorizederror: EventEmitter<Flexmonster.UnauthorizedErrorHandler> = new EventEmitter();
  @Output() update: EventEmitter<void> = new EventEmitter();
  @Output() beforetoolbarcreated: EventEmitter<Flexmonster.Toolbar> = new EventEmitter();
  @Output() beforegriddraw: EventEmitter<Object> = new EventEmitter();
  @Output() aftergriddraw: EventEmitter<Object> = new EventEmitter();
  @Output() afterchartdraw: EventEmitter<void> = new EventEmitter();
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
      sortFieldsList: this.sortFieldsList,
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
      olapstructureerror: (event: Flexmonster.ErrorEvent) => this.olapstructureerror.next(event),
      olapstructureloaded: () => this.olapstructureloaded.next(),
      openingreportfile: () => this.openingreportfile.next(),
      printcomplete: () => this.printcomplete.next(),
      printstart: () => this.printstart.next(),
      querycomplete: () => this.querycomplete.next(),
      queryerror: (event: Flexmonster.ErrorEvent) => this.queryerror.next(event),
      ready: () => this.ready.next(this.flexmonster),
      reportchange: () => this.reportchange.next(),
      reportcomplete: () => this.reportcomplete.next(),
      reportfilecancelled: () => this.reportfilecancelled.next(),
      reportfileerror: () => this.reportfileerror.next(),
      runningquery: () => this.runningquery.next(),
      unauthorizederror: (done: Flexmonster.UnauthorizedErrorHandler) => this.unauthorizederror.next(done),
      update: () => this.update.next(),
      beforetoolbarcreated: (toolbar: Flexmonster.Toolbar) => this.beforetoolbarcreated.next(toolbar),
      beforegriddraw: (event: Object) => this.beforegriddraw.next(event),
      aftergriddraw: (event: Object) => this.aftergriddraw.next(event),
      afterchartdraw: () => this.afterchartdraw.next()
    });
  }
}
