# CrowdStrike Foundry - Detection UI - Extra Hash lookups

This is a CrowdStrike Foundry UI plugin. 

Foundry applications extend the power of the Falcon platform with custom logic, data structures, workflow automation, and more, all configured specifically for your unique use cases. 

This is a UI extension with vanilla-JS for the Detections UI. 

https://www.crowdstrike.com/en-us/blog/building-custom-apps-with-crowdstrike-falcon-foundry/

## Developer

This app was created with `foundry` cli via homebrew

* foundry version 1.1.0

CLI initial template: 

`foundry ui extensions create`

## Design

Used the Crowdstrike OpenSource Toucan Tailwind CSS sheet. 
* There is a great preview & sandbox:  https://tailwind-toucan-base.pages.dev/  
* Raw Tailwind Module: https://github.com/CrowdStrike/tailwind-toucan-base
## Output

![Alt text](docs/Screenshot.png?raw=true "Screen Shot")

## SLDC

In order to deploy to your CID instance with CrowdStrike Foundry, you must authenticate via proper API permissions. The CLI tool can help create the permissions.

### Use the proper CrowdStrike cloud that exist for your CID

As an example `us-2` Base URL

```shell
$> export FOUNDRY_UI_DOMAIN="https://falcon.us-2.crowdstrike.com"
$> export FOUNDRY_API_GW_DOMAIN="https://api.us-2.crowdstrike.com"
```

`gov-1` Base URL

```shell
$> export FOUNDRY_UI_DOMAIN="https://falcon.laggar.gcw.crowdstrike.com"
$> export FOUNDRY_API_GW_DOMAIN="https://api.laggar.gcw.crowdstrike.com"
```

### Ensure your Profile exists

```shell
$> foundry profile
Active profile
	Name: ****-shadowbq-******
	CID: ****************************
```

### Deploy and Validate the App to your CID

Deploy app

```shell
$> foundry apps deploy
Computed diff for app "hash-extras.." from version v1.0.0-pre-release

➕  Added files:
	◦ LICENSE
	◦ README.md
	◦ docs/Screenshot.png

✏️  Modified files:
	◦ manifest.yml
	(...)

? Change Type Minor
? Change log:  Removal of icon, adding made with
✅  Deployment v1.1.0-pre-release in progress - see https://xxxxx.crowdstrike.com/foundry/app-manager/yyyyyyyyyy for more details
```

Validate deployment

```shell
$> foundry apps list-deployments
  Deployment ID                    | App Name             | App ID                           | Version
  zzzzzzzzzzzzzzzzzzzzz | hash-extras..  | wwwwwwwwwwwwwwwww | v1.0.0-pre-release
```

### Release the App

```shell
$> foundry apps release

Lets get started! To release a deployment we need some basic information first.

? Change Type Minor
? Which version to sync
         Version       |    Status     |     Created Time     |          Deployment ID               v1.1.0-pre-release | 🟢 Successful | 2024-11-05T14:44:03Z | zzzzzzzzzzzzzzzzzzzzzzz
? Notes:  ready for testing

release in progress for deployment_id: zzzzzzzzzzzzzzzzzzzz
```

### Install the App (license limiting action)

Install a released application from the App catalog to begin using it in your CID. 

**Note: Customers with a Falcon Insight XDR or Falcon Prevent subscription can install one Foundry app per CID for no additional cost. Installing additional Foundry apps requires a Falcon Foundry subscription or a Falcon Next-Gen SIEM subscription. Contact your CrowdStrike sales representative for more info.**

To install an app:

Go to `Foundry > Foundry > App` catalog.

**Note: You can also access the App catalog from the tabs in the App manager.**

On the app you want to install, click Open menu  and select Install.

Review the installation status of the app and verify that the install was successful.

This app appears only in the Detection UI at the bottom. Click the Arrow to expand and see the "app".

![Alt text](docs/isolation.png?raw=true "Screen Shot")

## Note on iframe injections 

The *iframe* which hosted the `UI extension` from CrowdStrike.com **socket** has `chrome allow` set to blank. Thus, `<iframe allow=“” csp="....`. 

No microphone, webcam, **clipboard**, encrypted media would be allowed through iframe linkage. 

Reference: 
* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#allow
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Permissions_Policy
* https://www.w3.org/TR/clipboard-apis/
  
