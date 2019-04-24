# Angular 4+ directive for Flexmonster Pivot component
[![Flexmonster Pivot table component](https://s3.amazonaws.com/flexmonster/github/fm-github-cover.png)](https://flexmonster.com)


This repository holds the TypeScript source code for using [Flexmonster Pivot](https://www.flexmonster.com/) in [Angular](https://angular.io/) applications. 

* [Getting started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Integrate Flexmonster into existing/new application](#add-to-app)
  * [Run simple Angular and Flexmonster sample from GitHub](#run-github-sample)
* [Usage](#usage)
  * [fm-pivot directive and its attributes](#fm-pivot-directive)
  * [Using API calls and events](#using-flexmonster-api)
  * [Angular Material tabs example](#material-tabs)
* [License](#license)
* [Support & feedback](#support-feedback)

## <a name="getting-started"></a>Getting Started ##

You have the following options to start:

* [Integrate Flexmonster into existing/new application](#add-to-app)
* [Run simple Angular and Flexmonster sample from GitHub](#run-github-sample)

### <a name="prerequisites"></a>Prerequisites ###

Node.js and npm are essential to Angular development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

Then install the [Angular CLI](https://cli.angular.io/) globally:

```bash
npm install -g @angular/cli
```

### <a name="add-to-app"></a>Integrate Flexmonster into existing/new application ###

If you don’t have Angular CLI app, you can create it by running in the console:

```bash
ng new PROJECT-NAME
cd PROJECT-NAME
```

Add Flexmonster Angular module by running in the console:

```bash
npm i ng-flexmonster --save
```

Add Flexmonster CSS and JS references to `angular.json`:

```bash
"styles": [ 
	...,
	"node_modules/flexmonster/flexmonster.min.css" 
],
"scripts": [ 
  ...,
  "node_modules/flexmonster/flexmonster.full.js" 
],
```

Include `FlexmonsterPivotModule` into `app.module.ts`. `app.module.ts` can be found inside `PROJECT-NAME/src/app` folder.

```bash
import { FlexmonsterPivotModule } from 'ng-flexmonster';

@NgModule({
  ...
  imports: [FlexmonsterPivotModule],
  ...
})
```

Insert `fm-pivot` directive where you need the pivot table, for example `app.component.html`.

```bash
<fm-pivot 
  [licenseKey]="'XXXX-XXXX-XXXX-XXXX-XXXX'"
  [report]="'https://cdn.flexmonster.com/reports/report.json'">
</fm-pivot>
```

Run your application from the console:

```bash
ng serve
```

To see the result open your browser on `http://localhost:4200/`.


### <a name="run-github-sample"></a>Run simple Angular and Flexmonster sample from GitHub ###

Download `.zip` archive with the sample or [clone it from GitHub](https://github.com/flexmonster/pivot-angular) within the following command:

```bash
git clone https://github.com/flexmonster/pivot-angular my-proj
cd my-proj
```

Install the npm packages described in the `package.json`:

```bash
npm install
```

Run your application:

```bash
ng serve
```

To see the result open your browser on `http://localhost:4200/`.

## <a name="usage"></a>Usage ##

### <a name="fm-pivot-directive"></a>fm-pivot directive and its attributes ###

`fm-pivot` directive embeds the component into the HTML page. Every attribute for `fm-pivot` directive is set either as a string value or as an Angular variable. Here is the list of available attributes:

* `componentFolder` – URL of the component’s folder which contains all necessary files. Also, it is used as a base URL for report files, localization files, styles and images. The default value for `componentFolder` is `flexmonster/`.
* `width` – width of the component on the page (pixels or percent). The default value for width is 100%.
* `height` – height of the component on the page (pixels or percent). The default value for height is `500`.
* `report` – property to set a report. It can be inline [Report Object](https://www.flexmonster.com/api/report-object/) or URL to report JSON.
* `toolbar` – parameter to embed the toolbar or not. Default value is `false` – without the toolbar.
* `customizeCell` – function that allows customizing of separate cells. Have a look at [customizeCell definition and examples](https://www.flexmonster.com/api/customizecell/).
* `licenseKey` – the license key.

Here is how all these attributes should be specified:

```bash
<fm-pivot [componentFolder]="'https://cdn.flexmonster.com/'"
          [toolbar]="true"
          [width]="'100%'"
          [height]="500"
          [licenseKey]="'XXXX-XXXX-XXXX-XXXX-XXXX'"
          [report]="'https://cdn.flexmonster.com/reports/report.json'"
          (reportcomplete)="onReportComplete($event)">
    Flexmonster will appear here
</fm-pivot>
```

### <a name="using-flexmonster-api"></a>Using API calls and events ###

Check out how `setReport()` API method is called when handling `onReportComplete` event in [app.component.ts](https://github.com/flexmonster/pivot-angular/blob/master/src/app/app.component.ts):

```bash
onReportComplete(): void {
	this.pivot.flexmonster.off("reportcomplete");
	this.pivot.flexmonster.setReport({
		dataSource: {
			filename: "https://cdn.flexmonster.com/data/data.json"
		}
	});
}
```

Also, you need to specify that `onReportComplete` handles `reportcomplete` event in `fm-pivot` directive:

```bash
(reportcomplete)="onReportComplete($event)
```

Here is the [list of all available API methods and events](https://www.flexmonster.com/api/). 

### <a name="material-tabs"></a>Angular Material tabs example ###

[This sample on GitHub](https://github.com/flexmonster/pivot-angular/tree/master/src/app/tabs) shows how to add Flexmonster to [Angular Material tabs](https://material.angular.io/components/tabs/overview).

## <a name="license"></a>License ##

Here is [Flexmonster licensing page](https://www.flexmonster.com/pivot-table-editions-and-pricing/). We have free 30 day trial! 

Flexmonster Angular directive is released as a MIT-licensed (free and open-source) add-on to Flexmonster Pivot.

## <a name="support-feedback"></a>Support & feedback ##

Please share your feedback or ask questions via [Flexmonster Forum](https://www.flexmonster.com/forum/).
