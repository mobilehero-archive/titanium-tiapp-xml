[//]: # (header-start)


<h1 align="center">
	<a href="https://blog.axway.com/mobile-apps/prepare-your-apps-for-appcelerator-end-of-support">
		Preparing for end of Axway
	</a>	
</h1>
<h2 align="center">
	👇 &nbsp; support for Amplify Cloud and Mobile   &nbsp; 👇
</h2>	

<a href="https://brenton.house/saying-goodbye-to-axway-amplify-titanium-31a44f3671de">
	<p align="center">
		<img src="https://cdn.secure-api.org/images/RIP-Axway-Amplify-Titanium.png" alt="RIP Axway Amplify Titanium (2010 - 2022)" width="80%" />
	</p>
</a>	
<p align="center">
	<a href="https://blog.axway.com/mobile-apps/changes-to-application-development-services">
			🪦 &nbsp; RIP Axway Amplify Titanium (2010 - 2022)
	</a>
</p>
<p align="center">
	<a href="https://blog.axway.com/mobile-apps/prepare-your-apps-for-appcelerator-end-of-support">
			🪦 &nbsp; RIP Axway Amplify Cloud Services (2012 - 2022)
	</a>
</p>
<p align="center">
	<a href="https://blog.axway.com/mobile-apps/prepare-your-apps-for-appcelerator-end-of-support">
			🪦 &nbsp; RIP Axway Amplify Crash Analytics (2015 - 2022)
	</a>
</p>

<hr>
<a href="https://blog.axway.com/mobile-apps/prepare-your-apps-for-appcelerator-end-of-support">
	<h4 align="center">
🛑 &nbsp;&nbsp; <a href="https://blog.axway.com/mobile-apps/prepare-your-apps-for-appcelerator-end-of-support">Axway has already shut down support</a> for most of their Amplify products related to mobile and cloud. 
</h4>

<h4 align="center">
A few of the open-source versions of Axway Amplify products will live on after Axway Amplify End-of-Life (EOL) announcements.  However, all closed-source projects and most open-source projects are now dead.  
	</h4>

<p>&nbsp;</p>

> 👉 &nbsp;&nbsp; A group of Axway employees, ex-Axway employees, and some developers from Titanium community have created a legal org and now officially decide all matters related to future of these products.  

<p>&nbsp;</p>
<hr>


## API FAQ:

* [API Best Practices](https://brenton.house)
* [What is API Security?](https://brenton.house/what-is-api-security-5ca8117d4911)
* [OWASP Top 10 List for API Security](https://www.youtube.com/watch?v=GLVHDj0Cpg4)
* [What is API Security?](https://brenton.house/what-is-api-security-5ca8117d4911)
* [Top API Trends for 2022](https://brenton.house/top-10-api-integration-trends-for-2022-49b05f2ef299)
* [What is a Frankenstein API?](https://brenton.house/what-is-a-frankenstein-api-4d6e59fca6)
* [What is a Zombie API?](https://brenton.house/what-is-a-zombie-api-6e5427c39b6a)
* [API Developer Experience](https://brenton.house/keys-to-winning-with-an-awesome-api-developer-experience-62dd2fa668f4)
* [API Cybersecurity 101](https://brenton.house/what-is-api-security-5ca8117d4911)
* [YouTube API Videos](https://youtube.com/brentonhouse)
* [YouTube API Shorts Videos](https://youtube.com/apishorts)

&nbsp;

[![Click to watch on Youtube](https://img.youtube.com/vi/GLVHDj0Cpg4/0.jpg)](https://www.youtube.com/watch?v=GLVHDj0Cpg4&list=PLsy9MwYlG1pew6sktCAIFD5tbrXy9HUQ7  "Click to watch on YouTube")


> &nbsp; [↑ Watch video on YouTube ↑](https://www.youtube.com/watch?v=GLVHDj0Cpg4&list=PLsy9MwYlG1pew6sktCAIFD5tbrXy9HUQ7)

&nbsp;



<p>&nbsp;</p>
<hr>

<p>&nbsp;</p>
<p>&nbsp;</p>

[//]: # (header-end)


# @titanium/tiapp-xml

[![@titanium/tiapp-xml version](https://img.shields.io/npm/v/@titanium/tiapp-xml.png)](https://www.npmjs.com/package/@titanium/tiapp-xml)
[![@titanium/tiapp-xml downloads](https://img.shields.io/npm/dm/@titanium/tiapp-xml.svg)](https://www.npmjs.com/package/@titanium/tiapp-xml)
[![@titanium/tiapp-xml dependencies](https://img.shields.io/librariesio/release/npm/@titanium/tiapp-xml.svg)](https://www.npmjs.com/package/@titanium/tiapp-xml)


> Modify your tiapp.xml file from Node.js.  This is a fork from tonylukasavage that primarily addresses the "." in the package name and module but leaving room to possibly add more enhancements.

* [API FAQ:](#api-faq)
* [📝 Description](#-description)
* [🚀 Getting Started](#-getting-started)
	* [Install](#install)
* [Examples](#examples)
	* [Change the Titanium SDK version](#change-the-titanium-sdk-version)
	* [Disable analytics](#disable-analytics)
	* [Add a new native module for android](#add-a-new-native-module-for-android)
	* [Print the tiapp.xml from the tiapp object](#print-the-tiappxml-from-the-tiapp-object)
* [API](#api)
	* [load(file)](#loadfile)
	* [parse(xmlString, filename)](#parsexmlstring-filename)
	* [find()](#find)
	* [toString()](#tostring)
	* [write([file])](#writefile)
	* [top-level elements](#top-level-elements)
	* [getDeploymentTarget(platform)](#getdeploymenttargetplatform)
	* [getDeploymentTargets()](#getdeploymenttargets)
	* [setDeploymentTarget(platform, value)](#setdeploymenttargetplatform-value)
	* [setDeploymentTargets(obj)](#setdeploymenttargetsobj)
	* [getProperty(name)](#getpropertyname)
	* [setProperty(name, [value], [type])](#setpropertyname-value-type)
	* [removeProperty(name)](#removepropertyname)
	* [getModules()](#getmodules)
	* [setModule(id, [version], [platform])](#setmoduleid-version-platform)
	* [removeModule(id, [platform])](#removemoduleid-platform)
	* [getPlugins()](#getplugins)
	* [setPlugin(id, [version])](#setpluginid-version)
	* [removePlugin(id)](#removepluginid)
	* [doc](#doc)
* [Todo](#todo)
* [📚Learn More](#learn-more)
* [📣 Feedback](#-feedback)


## 📝 Description 

A node.js parsing and manipulation API module for Appcelerator's [Titanium](http://www.appcelerator.com/titanium/) tiapp.xml configuration file. It makes it exceedingly easy now to read and modify entries in the tiapp.xml file programmatically. No need to manually parse XML anymore, but [you can](#doc) if you so choose.

For complete details regarding tiapp.xml files, please consult Appcelerator's [full documentation](http://docs.appcelerator.com/titanium/latest/#!/guide/tiapp.xml_and_timodule.xml_Reference).



## 🚀 Getting Started

### Install

Install `@titanium/tiapp-xml` in root of your project

```bash
$ npm install @titanium/tiapp-xml
```

## Examples

### Change the Titanium SDK version

```js
var tiapp = require('@titanium/tiapp-xml').load('./tiapp.xml');
tiapp.sdkVersion = '8.1.0.GA';
tiapp.write();
```

### Disable analytics

```js
var tiapp = require('@titanium/tiapp-xml').load('./tiapp.xml');
tiapp.analytics = false;
tiapp.write();
```

### Add a new native module for android

```js
var tiapp = require('@titanium/tiapp-xml').load('./tiapp.xml');
tiapp.setModule('com.tonylukasavage.someCoolModule', '1.0', 'android');
tiapp.write();
```

### Print the tiapp.xml from the tiapp object

```js
var tiapp = require('@titanium/tiapp-xml').load('./tiapp.xml');
console.log(tiapp.doc.toString());
```

## API

* module APIs
	* [load](#loadfile)
	* [parse](#parsexmlstring-filename)
	* [find](#find)
* tiapp APIs
	* [toString](#tostring)
	* [write](#writefile)
	* [top-level elements](#top-level-elements)
	* [getDeploymentTarget](#getdeploymenttargetplatform)
	* [getDeploymentTargets](#getdeploymenttargets)
	* [setDeploymentTarget](#setdeploymenttargetplatform-value)
	* [setDeploymentTargets](#setdeploymenttargetsobj)
	* [getProperty](#getpropertyname)
	* [setProperty](#setpropertyname-value-type)
	* [removeProperty](#removepropertyname)
	* [getModules](#getmodules)
	* [setModule](#setmoduleid-version-platform)
	* [removeModule](#removemoduleid-platform)
	* [getPlugins](#getplugins)
	* [setPlugin](#setpluginid-version)
	* [removePlugin](#removepluginid)
	* [doc](#doc)

### load(file)

Load a tiapp.xml file and return a Tiapp object. If `file` is undefined, [find()](#find) will attempt to locate a tiapp.xml file.

```js
var tiapp = require('@titanium/tiapp-xml').load('./tiapp.xml');
```

### parse(xmlString, filename)

Parse an xml string as a tiapp.xml document and return a Tiapp object. This is used by `load()` and generally isn't used directly. `filename` is optional, and is used only as a default value if you attempt to [write()](#writefile) later.

```js
var tiapp = require('@titanium/tiapp-xml').parse('<ti:app><!-- the rest of the tiapp.xml --></ti:app>');
```

### find()

Find a tiapp.xml file and return its file path. It will start by searching the current working directory for a tiapp.xml file. If it doesn't find it, it will continue to move up the folder hierarchy attempting to find tiapp.xml files. If it never finds a tiapp.xml, it returns `null`.

```js
var pathToTiappXml = require('@titanium/tiapp-xml').find();
```

### toString()

Return the string representation of the tiapp.xml file.

```js
var tiapp = require('@titanium/tiapp-xml').load('./tiapp.xml');
console.log(tiapp.toString());
```

### write([file])

Write the current Tiapp object out as a tiapp.xml file to `file`. If `file` is undefined, it will use the file supplied in the inital [load()](#loadfile) or [parse()](#parsexmlstring-filename) call. If it still can't find a file, an exception with be thrown.

```js
var tiapp = require('@titanium/tiapp-xml').load('./tiapp.xml');

// disable analytics
tiapp.analytics = false;

// write out the changes to "./tiapp.xml"
tiapp.write();

// or write out to an explicit location
tiapp.write('/path/to/tiapp.xml');
```

### top-level elements

Get and set [top-level tiapp.xml elements](http://docs.appcelerator.com/titanium/latest/#!/guide/tiapp.xml_and_timodule.xml_Reference-section-29004921_tiapp.xmlandtimodule.xmlReference-TopLevelElements) directly as properties. These properties can be referenced in dash form or camel case. For example, to work with the `sdk-version` you can use either `tiapp['sdk-version']` or `tiapp.sdkVersion`.

```js
var tiapp = require('@titanium/tiapp-xml').load('./tiapp.xml');

// prints the name and guid of the app
console.log(tiapp.name + ': ' + tiapp.guid);

// disable analytics
tiapp.analytics = false;

// change the sdk version
tiapp['sdk-version'] = '3.2.2.GA';
```

### getDeploymentTarget(platform)

Return a boolean indicating whether or not the given `platform` is enabled. If no `platform` is given, [getDeploymentTargets](#getdeploymenttargets) is called instead.

```js
var tiapp = require('@titanium/tiapp-xml').load('./tiapp.xml');
console.log(tiapp.getDeploymentTarget('android'));
```

The previous code would print `true` if the `deployment-targets` section of your tiapp.xml looked something like this:

```xml
<deployment-targets>
	<target device="android">true</target>
</deployment-targets>
```

### getDeploymentTargets()

Return an object representation of all the deployment target elements.

```js
var tiapp = require('@titanium/tiapp-xml').load('./tiapp.xml');
console.log(tiapp.getDeploymentTargets());
```

The previous code executed against a tiapp.xml that had everything but Tizen enabled would print this:

```js
{
	android: true,
	blackberry: true,
	ipad: true,
	iphone: true,
	mobileweb: true,
	tizen: false
}
```

### setDeploymentTarget(platform, value)

Enable or disable a platform. If `platform` is an object, [setDeploymentTargets](#setdeploymenttargetsobj) is called instead.

```js
var tiapp = require('@titanium/tiapp-xml').load('./tiapp.xml');
tiapp.setDeploymentTarget('android', false);
tiapp.write();
```

The previous code would write a `deployment-targets` entry something like this:

```xml
<deployment-targets>
	<target device="android">false</target>
</deployment-targets>
```

### setDeploymentTargets(obj)

Enabled or disable all platforms at once. `obj` is an object representation of all deployment targets.

```js
var tiapp = require('@titanium/tiapp-xml').load('./tiapp.xml');

// get existing list of deployment targets
var targets = tiapp.getDeploymentTarget();

// disable tizen and blackberry
targets.blackberry = false;
targets.tizen = false;
tiapp.setDeploymentTargets(targets);

// or use an object literal to do the same without the getDeploymentTargets() call
tiapp.setDeploymentTargets({
	android: true,
	blackberry: false,
	ipad: true,
	iphone: true,
	mobileweb: true,
	tizen: false
});

tiapp.write();
```

### getProperty(name)

Get a tiapp.xml [application property](http://docs.appcelerator.com/titanium/latest/#!/guide/tiapp.xml_and_timodule.xml_Reference-section-29004921_tiapp.xmlandtimodule.xmlReference-ApplicationProperties) value.

```js
var tiapp = require('@titanium/tiapp-xml').load('./tiapp.xml');
console.log(tiapp.getProperty('ti.ui.defaultunit')); // prints "system"
```

### setProperty(name, [value], [type])

Set a tiapp.xml [application property](http://docs.appcelerator.com/titanium/latest/#!/guide/tiapp.xml_and_timodule.xml_Reference-section-29004921_tiapp.xmlandtimodule.xmlReference-ApplicationProperties).

```js
var tiapp = require('@titanium/tiapp-xml').load('./tiapp.xml');

// with just a value
tiapp.setProperty('ti.ui.defaultunit', 'dp');

// or with a value and type
tiapp.setProperty('ti.ui.defaultunit', 'dp', 'string');

tiapp.write();
```

### removeProperty(name)

Remove an [application property](http://docs.appcelerator.com/titanium/latest/#!/guide/tiapp.xml_and_timodule.xml_Reference-section-29004921_tiapp.xmlandtimodule.xmlReference-ApplicationProperties) from the tiapp.xml.

```js
var tiapp = require('@titanium/tiapp-xml').load('./tiapp.xml');
tiapp.removeProperty('ti.ui.defaultunit');
tiapp.write();
```

### getModules()

Get an array of objects representing modules listed in the tiapp.xml.

```js
var tiapp = require('@titanium/tiapp-xml').load('./tiapp.xml');
var modules = tiapp.getModules();

// iterate through a list of modules from the tiapp.xml
modules.forEach(function(mod) {
	// read access to properties on module object
	console.log('id=%s,version=%s,platform=%s',
		mod.id, mod.version || '<no version>', mod.platform || '<no platform>');
});
```

### setModule(id, [version], [platform])

Add or update a module in the tiapp.xml.

```js
var tiapp = require('@titanium/tiapp-xml').load('./tiapp.xml');

// Add the ti.cloud module
tiapp.setModule('ti.cloud');

// Set the version of ti.cloud to 2.0
tiapp.setModule('ti.cloud', '2.0');

// Add a platform-specific module
tiapp.setModule('ti.cloud', '1.0', 'android');

// add with object for attributes
tiapp.setModule('some.module', {
	platform: 'android',
	version: '3.3'
});

// Add one more module, no additional details
tiapp.setModule('com.tonylukasavage.nothing');

tiapp.write();
```

The resulting tiapp.xml `<modules>` section would look like this:

```xml
<modules>
	<module version="2.0">ti.cloud</module>
	<module version="1.0" platform="android">ti.cloud</module>
	<module version="3.3" platform="android">some.module</module>
	<module>com.tonylukasavage.nothing</module>
</modules>
```

### removeModule(id, [platform])

Remove a module from the tiapp.xml.

```js
var tiapp = require('@titanium/tiapp-xml').load('./tiapp.xml');

// remove ti.cloud module that is _not_ platform-specific
tiapp.removeModule('ti.cloud');

// remove a platform-specific ti.cloud entry
tiapp.removeModule('ti.cloud', 'android');

tiapp.write();
```

### getPlugins()

Get an array of objects representing plugins listed in the tiapp.xml.

```js
var tiapp = require('@titanium/tiapp-xml').load('./tiapp.xml');
var plugins = tiapp.getPlugins();

// iterate through a list of plugins from the tiapp.xml
plugins.forEach(function(plugin) {
	// read access to properties on plugin object
	console.log('id=%s,version=%s', plugin.id, plugin.version || '<no version>');
});
```

### setPlugin(id, [version])

Add or update a plugin in the tiapp.xml.

```js
var tiapp = require('@titanium/tiapp-xml').load('./tiapp.xml');

// Add the ti.alloy plugin
tiapp.setPlugin('ti.alloy');

// Set the version of ti.alloy to 2.0
tiapp.setModule('ti.alloy', '2.0');

tiapp.write();
```

The resulting tiapp.xml `<plugins>` section would look like this:

```xml
<plugins>
	<plugin version="2.0">ti.alloy</plugin>
</plugins>
```

### removePlugin(id)

Remove a plugin from the tiapp.xml.

```js
var tiapp = require('@titanium/tiapp-xml').load('./tiapp.xml');
tiapp.removePlugin('ti.alloy');
tiapp.write();
```

### doc

A direct reference to the underlying XML Document object as supplied by [xmldom](https://github.com/jindw/xmldom). You will not need to use this in most cases and should use the tiapp.xml module APIs instead.

```js
var tiapp = require('@titanium/tiapp-xml').load('./tiapp.xml');
console.log(tiapp.doc.documentElement.nodeName); // prints "ti:app"
```

## Todo

* Platform-specific tiapp.xml sections



## 📚Learn More

- https://github.com/tonylukasavage/tiapp.xml - Original repo by [tonylukasavage](https://github.com/tonylukasavage)


## 📣 Feedback

Have an idea or a comment?  [Join in the conversation here](https://github.com/brentonhouse/titanium-tiapp-xml/issues)! 
