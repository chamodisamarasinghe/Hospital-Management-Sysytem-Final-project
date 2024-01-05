package com.example.demo.repo;

import com.example.demo.entity.Availability;
import com.example.demo.entity.Channel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChannelRepo extends JpaRepository<Channel, String> {
    List<Channel> findByDoctorId(String doctorId);
    List<Channel> findByIsBilled(boolean isBilled);
}
