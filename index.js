const RPC = require("discord-rpc");
const client = new RPC.Client({ transport: "ipc" });

const clientId = "copy_disini_untukClientnya";

client.on("ready", () => {
  client.setActivity({
    details: "Sibuk scrolling TikTok",
    state: "Nanti kerja, sekarang santuy dulu 😎",
    startTimestamp: new Date(),
    largeImageKey: "logo5", // Ganti dengan nama asset gambar kamu
    largeImageText: "Terminal",
    instance: false,
  });

  console.log("Rich Presence aktif!");
});

client.login({ clientId }).catch(console.error);
