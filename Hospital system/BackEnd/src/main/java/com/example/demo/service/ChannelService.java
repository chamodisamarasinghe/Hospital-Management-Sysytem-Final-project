package com.example.demo.service;

import com.example.demo.dto.AvailabilityDTO;
import com.example.demo.dto.ChannelDTO;
import com.example.demo.entity.Availability;
import com.example.demo.entity.Channel;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.repo.ChannelRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ChannelService {
    @Autowired
    private ChannelRepo channelRepo;
    @Autowired
    private ModelMapper modelMapper;

    public ChannelDTO saveChannel(ChannelDTO channelDTO) {
        channelRepo.save(modelMapper.map(channelDTO, Channel.class));
        return channelDTO;
    }

    public List<ChannelDTO> getAllChannels() {
        List<Channel> channelList = channelRepo.findAll();
        return modelMapper.map(channelList, new TypeToken<List<ChannelDTO>>() {
        }.getType());
    }

    public ChannelDTO getChannel(String id) {
        Optional<Channel> channel = channelRepo.findById(id);

        if (channel.isPresent()) {
            return modelMapper.map(channel.get(), ChannelDTO.class);
        } else {
            // Handle the case where the user is not found
            throw new UserNotFoundException(id);
        }
    }

    public List<ChannelDTO> getChannelByDoc(String id) {
        List<Channel> channelList = channelRepo.findByDoctorId(id);

        if (!channelList.isEmpty()) {
            return modelMapper.map(channelList, new TypeToken<List<ChannelDTO>>() {
            }.getType());
        } else {
            // Handle the case where the user is not found
            throw new UserNotFoundException(id);
        }
    }

    public ChannelDTO updateChannel(ChannelDTO channelDTO) {
        channelRepo.save(modelMapper.map(channelDTO, Channel.class));
        return channelDTO;
    }

    public boolean deleteChannel(String id) {
        if (!channelRepo.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        channelRepo.deleteById(id);
        return true;
    }

    public List<ChannelDTO> getUnbilledChannels() {
        List<Channel> unbilledChannels = channelRepo.findByIsBilled(false);

        if (!unbilledChannels.isEmpty()) {
            return modelMapper.map(unbilledChannels, new TypeToken<List<ChannelDTO>>() {
            }.getType());
        } else {
            throw new UserNotFoundException("false");
        }
    }

    public ChannelDTO markChannelAsBilled(String channelId) {
        Optional<Channel> optionalChannel = channelRepo.findById(channelId);

        if (optionalChannel.isPresent()) {
            Channel channel = optionalChannel.get();
            channel.setBilled(true);
            channelRepo.save(channel);

            return modelMapper.map(channel, ChannelDTO.class);
        } else {
            // Handle the case where the channel with the given ID is not found
            // You can throw an exception or return null, depending on your requirement.
            // throw new ChannelNotFoundException(channelId); // You can create a custom exception class for this
            return null;
        }
    }


}
