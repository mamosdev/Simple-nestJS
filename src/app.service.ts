import { Injectable } from '@nestjs/common';
import { DataDto } from './dto/data.dto';
import * as mqtt from 'mqtt';

@Injectable()
export class AppService {
  private client: mqtt.MqttClient;

  constructor() {
    this.client = mqtt.connect('mqtt://92.3.128.100:1883', {
      username: 'demo',
      password: '@Dmin123456',
    });

    this.client.on('connect', () => {
      console.log('Connected to MQTT broker');
    });

    this.client.on('error', (error) => {
      console.error('MQTT Error:', error);
    });
  }

  async sendData(data: DataDto) {
    return new Promise((resolve, reject) => {
      this.client.publish('datanestjs', JSON.stringify(data), (error) => {
        if (error) {
          reject(error);
        } else {
          resolve({
            success: true,
            message: 'Data successfully sent to MQTT broker',
          });
        }
      });
    });
  }
}
