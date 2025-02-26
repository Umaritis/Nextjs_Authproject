import { useRouter } from "next/navigation";
const router = useRouter();

const isUserAuthenticated = () => {
    const isLoggedIn = localStorage.getItem("user");
    return isLoggedIn != null && isLoggedIn != undefined;
}

exports.userAuth = (successCallback = () => { return true }, failureCallback = () => { router.push('/login-page') }) => {
    try {
        const isAuthenticated = isUserAuthenticated();
        isAuthenticated ? successCallback() : failureCallback();
    } catch (error) {
        console.log("error in user auth ", error);
        failureCallback();
    }

}

exports.logout = (successCallback = () => { router.push('/loginpage') }, failureCallback = () => { router.push('/loginpage') }) => {
    try {
        localStorage.removeItem("user");
        successCallback();
    } catch (error) {
        console.log("error logging out ", error);
        failureCallback();
    }
}




exports.login = (values, successCallback = () => { router.push('/dashboard') }, failureCallback = () => { }) => {
    try {
        const { email, password } = values;

        if (email === "admin@example.com" && password === "password123") {
            const userData = { email };
            localStorage.setItem("user", JSON.stringify(userData));

            console.log("User logged in:", userData);

            window.location.href = "/dashboard"
        } else {
            console.log("Invalid credentials");
            alert("Invalid email or password!");
        }
    } catch (error) {

    }
} 