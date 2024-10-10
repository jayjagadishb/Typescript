type event = "click" | "scroll" | "hover";
type excludeevent = Exclude<event, "hover">;

const handleEvent = (type: excludeevent) => {
  console.log(`Handling event: ${type}`);
};

handleEvent("scroll");
