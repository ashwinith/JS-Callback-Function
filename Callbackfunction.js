// Call Back Function

//let message=undefined;

function callDevice(deviceTypeMessage,funcCallDeviceType) 
{

  let message = funcCallDeviceType(deviceTypeMessage);

    return `This device is ${message}`;

}

message = callDevice("Android", 
         function(cbdeviceMessage) {
        return cbdeviceMessage;});

 console.log(message);

message = callDevice("iOS", 
         function(cbdeviceMessage) {
        return cbdeviceMessage ;});

 console.log(message);

message = callDevice("BlackBerry", 
         function(cbdeviceMessage) {
        return cbdeviceMessage;});

console.log(message);

