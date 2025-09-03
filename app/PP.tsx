import React from "react";
import {
  ScrollView,
  Pressable,
  Image,
  View,
  Text,
  Dimensions,
} from "react-native";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { NavigationProp } from "./../types/customTypes.ts";

const { height } = Dimensions.get("window");

export default function PP(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp>();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <View className="w-full items-center bg-[#001F3F] pt-14 pb-12">
        <View className=" w-[90%] h-[5%] flex-row justify-between items-center">
          <Pressable
            className="w-fit h-full flex justify-center items-center "
            onPress={openDrawer}
          >
            <Image
              style={{ width: height * 0.05, height: height * 0.05 }}
              source={
                require("./../assets/images/menu.png") as ImageSourcePropType
              }
            />
          </Pressable>

          <Text
            className="color-[#B7BA00] h-fit"
            style={{ fontSize: height * 0.04 }}
          >
            Privacy Policy
          </Text>

          <View
            className="w-fit h-full flex justify-center items-center "
            style={{ width: height * 0.05, height: height * 0.05 }}
          />
        </View>
        <View className="w-[90%] flex items-center">
          <Text
            className="color-[#B7BA00] mb-4"
            style={{ fontSize: height * 0.015 }}
          >
            Last updated: September 03, 2025
          </Text>
          <View>
            <Text
              className="color-[#B7BA00]"
              style={{ fontSize: height * 0.015 }}
            >
              1. Introduction
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              This Privacy Policy explains how the Gita App (“the App”) handles
              information. The App is designed for offline use and aims to
              minimize data collection.
            </Text>
          </View>
          <View>
            <Text
              className="color-[#B7BA00]"
              style={{ fontSize: height * 0.015 }}
            >
              2. Data We Collect
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              The App does not collect personal information such as names, email
              addresses, or identifiers. Limited app data (e.g., preferred
              language, reading progress, notification schedule) may be stored
              locally on the device to provide core functionality.
            </Text>
          </View>
          <View>
            <Text
              className="color-[#B7BA00]"
              style={{ fontSize: height * 0.015 }}
            >
              3. How We Use Data
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              Locally stored data is used only to personalize the experience,
              remember settings, and schedule notifications. No data is used for
              advertising or analytics.
            </Text>
          </View>
          <View>
            <Text
              className="color-[#B7BA00]"
              style={{ fontSize: height * 0.015 }}
            >
              4. Local Storage Only
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              The App operates offline. Information remains on the device and is
              not transmitted to external servers or shared with third parties.
            </Text>
          </View>
          <View>
            <Text
              className="color-[#B7BA00]"
              style={{ fontSize: height * 0.015 }}
            >
              5. Notifications
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              Notifications are generated locally according to the schedule and
              preferences set on the device. The App does not contact external
              services to send notifications.
            </Text>
          </View>
          <View>
            <Text
              className="color-[#B7BA00]"
              style={{ fontSize: height * 0.015 }}
            >
              6. Permissions
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              The App may request permissions necessary for offline
              functionality, such as scheduling local notifications and storing
              data. Declining permissions may limit certain features.
            </Text>
          </View>
          <View>
            <Text
              className="color-[#B7BA00]"
              style={{ fontSize: height * 0.015 }}
            >
              7. Children’s Privacy
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              The App does not collect personal data from children. If used by
              minors, it should be under the supervision of a parent or legal
              guardian.
            </Text>
          </View>
          <View>
            <Text
              className="color-[#B7BA00]"
              style={{ fontSize: height * 0.015 }}
            >
              8. Data Security
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              The App relies on the device’s security features to protect
              locally stored data. Users should maintain device security (e.g.,
              screen lock, OS updates).
            </Text>
          </View>
          <View>
            <Text
              className="color-[#B7BA00]"
              style={{ fontSize: height * 0.015 }}
            >
              9. Data Retention and Deletion
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              Data is retained on the device for as long as the App is
              installed. Uninstalling the App removes all locally stored data.
            </Text>
          </View>
          <View>
            <Text
              className="color-[#B7BA00]"
              style={{ fontSize: height * 0.015 }}
            >
              10. Changes to This Policy
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              This Privacy Policy may be updated periodically. Material changes
              will be communicated within the App.
            </Text>
          </View>
          <View>
            <Text
              className="color-[#B7BA00]"
              style={{ fontSize: height * 0.015 }}
            >
              11. Contact
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              For privacy questions or requests, please use the support section
              within the App.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
