import React from "react";
import { ScrollView, View, Text } from "react-native";

export default function TOS(): React.JSX.Element {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <View className="w-full items-center h-full bg-[#001F3F]">
        <Text>Terms of Service</Text>

        <Text>Last updated: August 24, 2025</Text>

        <View>
          <Text>1. Acceptance of Terms</Text>
          <Text>
            By using the Gita App (“the App”), you agree to be bound by these
            Terms of Service. If you do not agree to these terms, do not use the
            App.
          </Text>
        </View>

        <View>
          <Text>2. App Overview</Text>
          <Text>
            The Gita App is designed exclusively for offline use. It provides
            Bhagavad Gita verses and allows users to receive notifications based
            on their preferences. The App does not require internet access and
            stores your reading history only on your device.
          </Text>
        </View>

        <View>
          <Text>3. Notifications</Text>
          <Text>
            The App sends notifications as per the schedule and preferences set
            by you on your device. Notifications are generated locally and no
            external servers are contacted.
          </Text>
        </View>

        <View>
          <Text>4. Data Storage and Privacy</Text>
          <Text>
            All app data, including your verse reading history, notification
            settings, and preferences, are stored locally on your device. No
            data is shared, collected, or transmitted to any external servers or
            third parties.
          </Text>
        </View>

        <View>
          <Text>5. Permissions</Text>
          <Text>
            The App may request system permissions necessary for offline
            functionality, such as scheduling local notifications and storing
            data on the device. Denying these permissions may limit certain
            features.
          </Text>
        </View>

        <View>
          <Text>6. User Responsibilities</Text>
          <Text>
            You are responsible for maintaining your device security and
            managing your app data. Because data is stored only on your device,
            uninstalling the App will permanently delete all stored data.
          </Text>
        </View>

        <View>
          <Text>7. Content and Educational Use</Text>
          <Text>
            The App provides scriptural content for personal, educational, and
            devotional use. It is not a substitute for professional, legal,
            medical, or mental-health advice.
          </Text>
        </View>

        <View>
          <Text>8. Intellectual Property</Text>
          <Text>
            The App’s code, design, and compiled assets are the property of the
            developers or their licensors. Scriptural text may be used under
            applicable licenses or public domain status where relevant. Users
            may not copy, modify, distribute, or reverse-engineer the App except
            as permitted by law.
          </Text>
        </View>

        <View>
          <Text>9. Modifications to the App</Text>
          <Text>
            The App may be updated from time to time to enhance functionality or
            fix bugs. Updates will not change the offline nature of the App;
            your data remains on your device.
          </Text>
        </View>

        <View>
          <Text>10. Termination</Text>
          <Text>
            Your right to use the App may terminate if you violate these Terms.
            You may stop using and uninstall the App at any time; uninstalling
            will remove all locally stored data.
          </Text>
        </View>

        <View>
          <Text>11. Disclaimers</Text>
          <Text>
            The App is provided “as is” and “as available” without warranties of
            any kind, express or implied, including but not limited to
            merchantability, fitness for a particular purpose, and
            non-infringement. Use of the App is at your sole risk.
          </Text>
        </View>

        <View>
          <Text>12. Limitation of Liability</Text>
          <Text>
            To the maximum extent permitted by law, the developers shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages, or any loss of data, arising from or related to
            your use of or inability to use the App.
          </Text>
        </View>

        <View>
          <Text>13. Indemnification</Text>
          <Text>
            You agree to indemnify and hold harmless the developers from any
            claims, damages, liabilities, and expenses arising from your misuse
            of the App or violation of these Terms.
          </Text>
        </View>

        <View>
          <Text>14. Children’s Use</Text>
          <Text>
            If the App is used by minors, it should be under the supervision of
            a parent or legal guardian. The App does not collect personal data
            and operates entirely offline.
          </Text>
        </View>

        <View>
          <Text>15. Governing Law</Text>
          <Text>
            These Terms are governed by the laws applicable in your jurisdiction
            unless otherwise required by mandatory local law. Any disputes shall
            be resolved in the courts having jurisdiction in your place of
            residence where permitted.
          </Text>
        </View>

        <View>
          <Text>16. Changes to Terms</Text>
          <Text>
            We may revise these Terms from time to time. Material changes will
            be communicated within the App. Continued use after changes take
            effect constitutes acceptance of the revised Terms.
          </Text>
        </View>

        <View>
          <Text>17. Contact</Text>
          <Text>
            For questions about these Terms, please use the support section
            within the App.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
