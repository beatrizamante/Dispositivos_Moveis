import { TextInput, View, StyleSheet, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function ResetPassword() {

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    const [resetPassword, setResetPassword] = useState("");
    const [validPassword, setValidPassword] = useState("");
    const [isValid, setIsValid] = useState(false);

    const validation = () => {
        if(resetPassword.length >= 6 && resetPassword === validPassword && passwordRegex.test(resetPassword)) {
            setIsValid(() => !isValid)
        } else 
    }
    
    useEffect(() => {

        return () => {

        }
    }, [isValid])
    return (
      <View>
        <TextInput
                style={styles.input}
                value={resetPassword}
                onChangeText={(val) => setResetPassword(resetPassword)}
                secureTextEntry={true}
                placeholder="new password"
            >
            </TextInput>
            <TextInput
                style={styles.input}
                value={validPassword}
                onChangeText={(val) => setValidPassword(validPassword)}
                secureTextEntry={true}
                placeholder="confirm password"
            >
            </TextInput>
            <Button
                title="Reset Password"
                disabled={isValid ? false : true}
                onPress={() => {}}
            />
      </View>
    )
  }

  const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});