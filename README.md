# CrowdStrike Foundry - Detection UI - Extra Hash lookups

This is a CrowdStrike Foundry UI plugin. 

Foundry applications extend the power of the Falcon platform with custom logic, data structures, workflow automation, and more, all configured specifically for your unique use cases. 

This is a UI extension with vanilla-JS for the Detections UI. 

https://www.crowdstrike.com/en-us/blog/building-custom-apps-with-crowdstrike-falcon-foundry/

## Developer

This app was created with 

* foundry version 1.1.0

CLI initial template: 

`foundry ui extensions create`

## Design

Used the Crowdstrike OpenSource Toucan Tailwind CSS sheet. 
* There is a great preview & sandbox:  https://tailwind-toucan-base.pages.dev/  
* Raw Tailwind Module: https://github.com/CrowdStrike/tailwind-toucan-base
## Output

![Alt text](docs/Screenshot.png?raw=true "Screen Shot")

## Note on iframe injections 

The *iframe* which hosted the `UI extension` from CrowdStrike.com **socket** has `chrome allow` set to blank. Thus, `<iframe allow=“” csp="....`. 

No microphone, webcam, **clipboard**, encrypted media would be allowed through iframe linkage. 

Reference: 
* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#allow
* https://developer.mozilla.org/en-US/docs/Web/HTTP/Permissions_Policy
* https://www.w3.org/TR/clipboard-apis/
  
