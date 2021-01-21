const USER_AGENTS = [
  "jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0",
  "jdapp;iPhone;9.3.4;14.3;network/4g;ADID/1C141FDD-C62F-425B-8033-9AAB7E4AE6A3;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone11,8;addressid/2005183373;supportBestPay/0;appBuild/167502;jdSupportDarkMode/0;pv/414.19;apprpd/Babel_Native;ref/TTTChannelViewContoller;psq/5;ads/;psn/88732f840b77821b345bf07fd71f609e6ff12f43|1701;jdv/0|iosapp|t_335139774|appshare|CopyURL|1610885480412|1610885486;adk/;app_device/IOS;pap/JA2015_311210|9.3.4|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.3.1;13.6;network/wifi;ADID/82EBC38A-22C9-7832-2854-ECD760EFDF03;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/7326117e0c;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/4be30ed80cc93279b20b3511b0e6f6e2d41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|94238f5e91534eff26963c550a0844a9|1611133787;adk/;app_device/IOS;pap/JA2015_311210|9.3.1|IOS 13.6;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.3.1;13.6;network/wifi;ADID/5A517546-F045-7A96-18EC-7317E0C421AF;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/be6eafa49d;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/c6da5a938942c27b2634d3a6e090a97fd41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|54d27456fc7f2bd400e62be20379cf7f|1611133813;adk/;app_device/IOS;pap/JA2015_311210|9.3.1|IOS 13.6;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.3.1;13.5;network/wifi;ADID/DF67F172-D6E8-5902-2632-3E15BF5750B9;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/6149dbfa94;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/ee2a7f972ca063afcad4a5f72fcfab08d41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|a51546972a7bb617fdc68eb06fee5741|1611133838;adk/;app_device/IOS;pap/JA2015_311210|9.3.1|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.3.1;14.1;network/wifi;ADID/AA9A9C35-145C-F479-5E79-B90BE7575387;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/eef38d6f5a;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/25b72f51edbd1ffd2a44851e43e701ddd41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|23aadc6f6678b717e3074c2e18216e4b|1611133863;adk/;app_device/IOS;pap/JA2015_311210|9.3.1|IOS 14.1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.3.1;13.3;network/wifi;ADID/6BD621BD-56D2-8D41-5992-612C9B47AE31;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/6ef0458b3e;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/8fa5153535d8162d149576903ef83f60d41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|7c7cccc08e3ad1133fab7a5d55594778|1611133878;adk/;app_device/IOS;pap/JA2015_311210|9.3.1|IOS 13.3;Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.3.1;13.7;network/wifi;ADID/81259E93-4BD6-EEE0-5940-38488EE9CD8C;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/0c7e39ea95;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/570e3fe0ac1f9ec37594db4150defda8d41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|6af58e2b8306030829a2c7263dde5fbf|1611133889;adk/;app_device/IOS;pap/JA2015_311210|9.3.1|IOS 13.7;Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.3.1;14.1;network/wifi;ADID/FD2E3F22-568C-1272-BB67-337E9ADA87A9;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/bd62f241d6;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/ee5c7a30c9ecf6403d3a51e21256b0a3d41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|8b7418a46668301083f645ee8cfd1665|1611133902;adk/;app_device/IOS;pap/JA2015_311210|9.3.1|IOS 14.1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.3.1;13.3;network/wifi;ADID/29357F7E-E207-8125-5230-618217D502FB;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/c6f851e123;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/bab8095131dce3fce92e517b3768f656d41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|9049d276d487231ca48418fb1c065568|1611135259;adk/;app_device/IOS;pap/JA2015_311210|9.3.1|IOS 13.3;Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.3.1;13.4;network/wifi;ADID/66286A8A-AC77-621C-0FC3-DD50D883F335;JDEbook/openapp.jdreader;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/0260059994;supportBestPay/0;appBuild/167461;pushNoticeIsOpen/0;jdSupportDarkMode/1;pv/1430.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/bccf1a9e60a5387006a7a429c1da737bd41d8cd9|3880;jdv/0|kong|t_1000089893_|tuiguang|6e5caa6534e7e568e0d805a892e465e3|1611135309;adk/;app_device/IOS;pap/JA2015_311210|9.3.1|IOS 13.4;Mozilla/5.0 (iPhone; CPU iPhone OS 13_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;9.3.5;14.3;network/wifi;ADID/0AEFEAA4-D39D-44C9-9C0C-0BE23F8F71AA;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone12,3;addressid/902369124;supportBestPay/0;appBuild/167515;jdSupportDarkMode/1;pv/545.2;apprpd/Home_Main;ref/JDMainPageViewController;psq/1;ads/;psn/4c1eb8becaa1ac13148d8e1ae757b095f3897035|1273;jdv/0|kong|t_1000089893_157_0_184__0615da2400ad7955|tuiguang|15fa9ecbea21461d924d3dae0e870cf5|1611139506;adk/;app_device/IOS;pap/JA2015_311210|9.3.5|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
  "jdapp;iPhone;4.0.0;11.4;network/wifi;model/iPhone8,1;appBuild/100401;ADID/64199E21-4ECD-4217-BD79-0C4D82033FD8;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/1;hasOCPay/0;supportBestPay/0;session/73;pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15F79",
 "jdapp;iPhone;9.3.5;14.3;network/wifi;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone13,4;addressid/-1473183959;supportBestPay/0;appBuild/167515;jdSupportDarkMode/0;pv/4476.212;apprpd/;adk/;app_device/IOS;pap/JA2015_311210|9.3.5|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"
]
/**
 * 生成随机数字
 * @param {number} min 最小值（包含）
 * @param {number} max 最大值（不包含）
 */
function randomNumber(min = 0, max = 100) {
  return Math.min(Math.floor(min + Math.random() * (max - min)), max);
}
const USER_AGENT = USER_AGENTS[randomNumber(0, USER_AGENTS.length)];

module.exports = {
  USER_AGENT
}
