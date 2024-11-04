import FalconApi from '@crowdstrike/foundry-js';

const falcon = new FalconApi();


function drawCircl(md5, sha256) {

  document.getElementById('app').innerHTML =

`
<div class="w-full p-3 bg-surface-md" >
<div class="grid items-center justify-items-center gap-3">
  <dl class="grid w-full gap-x-6 gap-y-3" data-test-selector="key-value-grid"
    style="grid-template-columns: repeat(3, minmax(0px, 1fr));">
    <div class="col-span-2 col-start-1 row-span-1 row-start-1" data-test-selector="user-sid">
      <dt class="type-xs truncate text-body-and-labels" data-test-selector="key">
        File Hash MD5
      </dt>
      <dd class="type-md min-h-6 text-titles-and-attributes" data-test-selector="value">
        <span class="grid" data-test-selector="truncate-text">
          <span class="block truncate" data-test-selector="text-container">
            <span id="det-md5">
            ` + md5 + `
            </span>
          </span></span>
      </dd>
    </div>
    <div class="col-span-2 col-start-1  row-start-2" data-test-selector="user-admin">
      <dt class="type-xs truncate text-body-and-labels" data-test-selector="key">
        File Hash Sha256
      </dt>
      <dd class="type-md min-h-6 text-titles-and-attributes" data-test-selector="value">
        <span id="det-sha256">` + sha256 + ` </span>
      </dd>
    </div>
    <div class="col-span-1 col-start-1 row-span-1 row-start-3" data-test-selector="user-logon-type">
      <dt class="type-xs truncate text-body-and-labels" data-test-selector="key">
        Search CIRCL
      </dt>
      <dd class="type-md min-h-6 text-titles-and-attributes" data-test-selector="value">
        <span class="grid" data-test-selector="truncate-text">
          <span class="block truncate" data-test-selector="text-container">
            ` + '<a href="https://hashlookup.circl.lu/lookup/md5/' + md5 + '" class="inline-block relative underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle" target="_blank">Circl MD5 Lookup</a> <br />' +
            '<a href="https://hashlookup.circl.lu/lookup/sha256/' + sha256 + '" class="inline-block relative underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle" target="_blank">Circl SHA256 Lookup</a>' +
            `
          </span></span>
      </dd>
    </div>
    <div class="col-span-1 col-start-2 row-span-1 row-start-3" data-test-selector="user-logon-time">
      <dt class="type-xs truncate text-body-and-labels" data-test-selector="key">
        Search VXVault
      </dt>
      <dd class="type-md min-h-6 text-titles-and-attributes" data-test-selector="value">
        <time datetime="2024-08-09T15:35:49.595Z">
          <span class="grid" data-test-selector="truncate-text">
            <span class="block truncate" data-test-selector="text-container">
              `+ '<a href="http://vxvault.net/ViriList.php?MD5=' + md5 + '" class="inline-block relative underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle" target="_blank">VxVault MD5 Lookup</a>' +
`              
            </span></span>
        </time>
      </dd>
    </div>
  </dl>
</div>
</div>`
  };

(async () => {
  await falcon.connect();

  // your code goes here
  document.getElementById('app').innerHTML =
    '<h1 class="text-titles-and-attributes">Waiting for data...</h1>';
})();

falcon.events.on('data', (data) => {
  console.log('Received updated data:', data);
  console.log('MD5:', data.detection.md5);
  console.log('SHA256:', data.detection.sha256);
  let md5 = data.detection.md5;
  let sha256 = data.detection.sha256;
  drawCircl(md5, sha256);
});