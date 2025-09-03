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

export default function TOS(): React.JSX.Element {
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
            Terms Of Service
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
            Last updated: August 24, 2025
          </Text>
          <View>
            <Text
              className="color-[#B7BA00]"
              style={{ fontSize: height * 0.015 }}
            >
              1. Acceptance of Terms
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              By using the Gita App (“the App”), you agree to be bound by these
              Terms of Service. If you do not agree to these terms, do not use
              the App.
            </Text>
          </View>
          <View>
            <Text
              className="color-[#B7BA00] "
              style={{ fontSize: height * 0.015 }}
            >
              2. App Overview
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              The Gita App is designed exclusively for offline use. It provides
              Bhagavad Gita verses and allows users to receive notifications
              based on their preferences. The App does not require internet
              access and stores your reading history only on your device.
            </Text>
          </View>
          <View>
            <Text
              className="color-[#B7BA00]"
              style={{ fontSize: height * 0.015 }}
            >
              3. Notifications
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              The App sends notifications as per the schedule and preferences
              set by you on your device. Notifications are generated locally and
              no external servers are contacted.
            </Text>
          </View>
          <View>
            <Text
              className="color-[#B7BA00]"
              style={{ fontSize: height * 0.015 }}
            >
              4. Data Storage and Privacy
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              All app data, including your verse reading history, notification
              settings, and preferences, are stored locally on your device. No
              data is shared, collected, or transmitted to any external servers
              or third parties.
            </Text>
          </View>
          <View>
            <Text
              className="color-[#B7BA00]"
              style={{ fontSize: height * 0.015 }}
            >
              5. Permissions
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              The App may request system permissions necessary for offline
              functionality, such as scheduling local notifications and storing
              data on the device. Denying these permissions may limit certain
              features.
            </Text>
          </View>
          <View>
            <Text
              className="color-[#B7BA00]"
              style={{ fontSize: height * 0.015 }}
            >
              6. User Responsibilities
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              You are responsible for maintaining your device security and
              managing your app data. Because data is stored only on your
              device, uninstalling the App will permanently delete all stored
              data.
            </Text>
          </View>
          <View>
            <Text
              className="color-[#B7BA00]"
              style={{ fontSize: height * 0.015 }}
            >
              7. Content and Educational Use
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              The App provides scriptural content for personal, educational, and
              devotional use. It is not a substitute for professional, legal,
              medical, or mental-health advice.
            </Text>
          </View>
          <View>
            <Text
              className="color-[#B7BA00]"
              style={{ fontSize: height * 0.015 }}
            >
              8. Intellectual Property
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              The App’s code, design, and compiled assets are the property of
              the developers or their licensors. Scriptural text may be used
              under applicable licenses or public domain status where relevant.
              Users may not copy, modify, distribute, or reverse-engineer the
              App except as permitted by law.
            </Text>
          </View>
          <View>
            <Text
              className="color-[#B7BA00]"
              style={{ fontSize: height * 0.015 }}
            >
              9. Modifications to the App
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              The App may be updated from time to time to enhance functionality
              or fix bugs. Updates will not change the offline nature of the
              App; your data remains on your device.
            </Text>
          </View>
          <View>
            <Text
              className="color-[#B7BA00]"
              style={{ fontSize: height * 0.015 }}
            >
              10. Termination
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              Your right to use the App may terminate if you violate these
              Terms. You may stop using and uninstall the App at any time;
              uninstalling will remove all locally stored data.
            </Text>
          </View>
          <View>
            <Text
              className="color-[#B7BA00]"
              style={{ fontSize: height * 0.015 }}
            >
              11. Disclaimers
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              The App is provided “as is” and “as available” without warranties
              of any kind, express or implied, including but not limited to
              merchantability, fitness for a particular purpose, and
              non-infringement. Use of the App is at your sole risk.
            </Text>
          </View>
          <View>
            <Text
              className="color-[#B7BA00] "
              style={{ fontSize: height * 0.015 }}
            >
              12. Limitation of Liability
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              To the maximum extent permitted by law, the developers shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages, or any loss of data, arising from or related to
              your use of or inability to use the App.
            </Text>
          </View>
          <View>
            <Text
              className="color-[#B7BA00]"
              style={{ fontSize: height * 0.015 }}
            >
              13. Indemnification
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              You agree to indemnify and hold harmless the developers from any
              claims, damages, liabilities, and expenses arising from your
              misuse of the App or violation of these Terms.
            </Text>
          </View>
          <View>
            <Text
              className="color-[#B7BA00] "
              style={{ fontSize: height * 0.015 }}
            >
              14. Children’s Use
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              If the App is used by minors, it should be under the supervision
              of a parent or legal guardian. The App does not collect personal
              data and operates entirely offline.
            </Text>
          </View>
          <View>
            <Text
              className="color-[#B7BA00] "
              style={{ fontSize: height * 0.015 }}
            >
              15. Governing Law
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              These Terms are governed by the laws applicable in your
              jurisdiction unless otherwise required by mandatory local law. Any
              disputes shall be resolved in the courts having jurisdiction in
              your place of residence where permitted.
            </Text>
          </View>
          <View>
            <Text
              className="color-[#B7BA00]"
              style={{ fontSize: height * 0.015 }}
            >
              16. Changes to Terms
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              We may revise these Terms from time to time. Material changes will
              be communicated within the App. Continued use after changes take
              effect constitutes acceptance of the revised Terms.
            </Text>
          </View>
          <View>
            <Text
              className="color-[#B7BA00]"
              style={{ fontSize: height * 0.015 }}
            >
              17. Contact
            </Text>
            <Text
              className="color-[#B7BA00] mb-4"
              style={{ fontSize: height * 0.015 }}
            >
              For questions about these Terms, please use the support section
              within the App.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
