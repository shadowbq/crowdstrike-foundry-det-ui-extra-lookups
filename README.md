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

## Output

![Alt text](docs/Screenshot.png?raw=true "Screen Shot")

## Note on iframe injections

The chrome allow is set to blank, so `<iframe allow=“”`. No microphone, webcam, **clipboard**, encrypted media would be allowed through iframe linkage. 