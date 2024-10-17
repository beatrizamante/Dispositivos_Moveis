import React, { useState } from "react";
import { ScrollView, StyleSheet, TextInput, Button } from "react-native";

export default function Feed() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        console.log(`Username ${username} and password ${password}`);
    }

    return (
        <ScrollView>
            <TextInput
                style={styles.input}
                value={username}
                onChangeText={(val) => setUsername(username)}
                placeholder="username"
            >
                {username}
            </TextInput>
            
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={(val) => setPassword(password)}
                secureTextEntry={true}
                placeholder="password"
            >
                {password}
            </TextInput>
            
            <Button
                title="Submit"
                onPress={() => handleLogin}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
