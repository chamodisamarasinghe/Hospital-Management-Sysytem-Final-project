package com.example.demo.controller;

import com.example.demo.dto.AvailabilityDTO;
import com.example.demo.dto.ChannelDTO;
import com.example.demo.service.ChannelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(value = "api/v1/channel")
@CrossOrigin("http://localhost:3000")
public class ChannelController {
    @Autowired
    private ChannelService channelService;

    @GetMapping("/getChannels")
    public List<ChannelDTO> getChannels() {
        return channelService.getAllChannels();
    }

    @GetMapping("/getChannelsByBill")
    public List<ChannelDTO> getChannelsByBill() {
        return channelService.getUnbilledChannels();
    }

    @GetMapping("/getChannel/{id}")
    public ChannelDTO getChannel(@PathVariable String id) {
        return channelService.getChannel(id);
    }

    @GetMapping("/getChannelByDoc/{id}")
    public List<ChannelDTO> getChannelByDoc(@PathVariable String id) {
        return channelService.getChannelByDoc(id);
    }

    @GetMapping("/markChannelAsBilled/{id}")
    public ChannelDTO markChannelAsBilled(@PathVariable String id) {
        return channelService.markChannelAsBilled(id);
    }

    public static String generateShortId() {
        UUID uuid = UUID.randomUUID();
        String uuidString = uuid.toString().replace("-", ""); // Remove dashes
        return uuidString.substring(0, 5);
    }

    @PostMapping("/saveChannel")
    public ChannelDTO saveChannel(@RequestBody ChannelDTO channelDTO) {
        String shortId = generateShortId();
        channelDTO.setChannelId(shortId); // Generate UUID
        return channelService.saveChannel(channelDTO);
    }

    @PutMapping("/updateChannel")
    public ChannelDTO updateChannel(@RequestBody ChannelDTO channelDTO) {
        return channelService.updateChannel(channelDTO);
    }

    @DeleteMapping("/deleteChannel/{id}")
    public boolean deleteChannel(@PathVariable String id) {
        return channelService.deleteChannel(id);
    }


}
