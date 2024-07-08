import React, { createContext, useContext, useEffect, useState, useReducer } from 'react';
import reducer, { initialState } from '../reducer/reducer';
// import { useNavigate } from 'react-router-dom';


// const DataContaxt = useContext(createContext());
export const DataContaxt = createContext();

// console.log(DataContaxt);

function ThemeContext(props) {
    const [post, setPost] = useState();

    // post data 
    const [postData, setPostData] = useState([]);

    const [loginToken, setToken] = useState(null);
    const [auth, setAuth] = useState("");

    // user login data 
    const [User_Details, setUserDetails] = useState("");


// auth.......................
    const [authCheck, setAuthCheck] = useState(localStorage.getItem("token"));

    const [model, setModel] = useState(false);
    const [postComments, setPostComments] = useState();
    const [comments, setComment] = useState();
    const [newComment, setNewComment] = useState();
    const [comCount, setComcount] = useState();

    // search value 
    const [searchValue, setSearchValue] = useState("");
    const [searchData , setSearchData] = useState();

    // add a post 
    const [postTitle , setPostTitle] = useState();
    const [postImg , setPostImg] = useState(null);

    // create a page states 

    const [pageName , setPageName] = useState("")
    const [pageCategory, setPageCategory]= useState("")
    const [pageBio, setPageBio] = useState("")
    const [pageProfileImg, setPageProfileImg] = useState("");

    // api all page data
    const [pagesData, setPagesData] = useState(null);

    // get userall Data state 
    const [useAllData, setUserAllData] = useState(null);

    // const [page, setPage] = useState(1);

    //  get the initial page data post
    // function fetchPost() {
    //     const myHeaders = new Headers();
    //     myHeaders.append("projectId", "ywl8a606ax3d");

    //     const requestOptions = {
    //         method: "GET",
    //         headers: myHeaders,
    //         redirect: "follow"
    //     };

    //     fetch(`https://academics.newtonschool.co/api/v1/facebook/post?limit=10&page=${page}`, requestOptions)
    //         .then((response) => response.json())
    //         .then((result) => setPostData(result))
    //         .catch((error) => console.error(error));
    // }

    // useEffect(() => {
    //     fetchPost();
    // }, [page]);

    // const handleScroll = () => {
    //     console.log("Height", document);
    // }

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    // }, [])


    // console.log("postData", postData)

    ///////////////////////////////////////////
    // Sign up Api calling to get the use token 
    const postFunction = () => {
        alert("post functio calling from themecontext")
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("projectID", "ywl8a606ax3d");

        const raw = JSON.stringify({
            "name": "test",
            "email": "test12@gmail.com",
            "password": "12345",
            "appType": "facebook"
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("https://academics.newtonschool.co/api/v1/user/signup", requestOptions)
            .then((response) => response.json())
            .then((result) => setPost(result))
            .catch((error) => console.error(error));

    }

    console.log("post data", post);

    // GET: Use the below API for fetching comments of a Post
    const comment = async (postId) => {
        const token = localStorage.getItem("token");
        // console.log(token)
        const projectId = "ywl8a606ax3d";
        const url = `https://academics.newtonschool.co/api/v1/facebook/post/${postId}/comments`;

        let myHeaders = new Headers();
        myHeaders.append("projectId", "ywl8a606ax3d");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        try {
            const response = await fetch(url, requestOptions);
            // if (!response.ok) {
            //     throw new Error(`HTTP error! status: ${response.status}`);
            // }
            const result = await response.json();
            alert(result.status);

            setPostComments(result.data);
            setNewComment(result.data.length);
            // console.log("newComment ", newComment);
            // console.log('comment :', result.data);
        } catch (error) {
            console.error('Error:', error);
            // Handle the error
            // alert('An error occurred while Comment the post. Please try again later.');
        }
    };


    const AddComment = async (postId) => {
        console.log(postId);

        const token = localStorage.getItem("token");
        console.log(token)
        const projectId = "ywl8a606ax3d";
        const url = `https://academics.newtonschool.co/api/v1/facebook/comment/${postId}`;

        let myHeaders = new Headers();
        myHeaders.append("projectId", "ywl8a606ax3d");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        const raw = JSON.stringify({
            "content": comments
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const response = await fetch(url, requestOptions);
            // if (!response.ok) {
            //     throw new Error(`HTTP error! status: ${response.status}`);
            // }
            const result = await response.json();
            alert(result.status)
            // setPostComments(result.data);
            // console.log('AddComment : ', result);
            comment(postId);
            setComment("");
        } catch (error) {
            console.error('Error:', error);
            // Handle the error
            // alert('An error occurred while Comment the post. Please try again later.');
        }
    };


    // SearchFunc
    async function SearchFunc(authorName) {
        // console.log(authorName);

        const token = localStorage.getItem("token");
        if (!token) {
            console.error('Token not found');
            return;
        }

        let myHeaders = new Headers();
        myHeaders.append("projectId", "ywl8a606ax3d");
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Authorization", `Bearer ${token}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        const url = `https://academics.newtonschool.co/api/v1/facebook/post?search={"author.name":"${authorName}"}`;

        try {
            const response = await fetch(url, requestOptions);
            const result = await response.json();
            setSearchData(result.data);  // Ensure setSearchData is defined in your context
            if (result.status === "success") {
                // alert(result.status);
            }

            if (result.status === "fail") {
                alert(result.message);
            }

            console.log(result);
        } catch (error) {
            console.error('Error:', error);
        }
    }


    // Get the user Details - 10 //( profile page user Details )
    async function getUserDetailFunc(authorId) {
        console.log(typeof authorId);
        const token = localStorage.getItem("token");
        if (!token) {
            console.error('Token not found');
            return;
        }

        let myHeaders = new Headers();
        myHeaders.append("projectId", "ywl8a606ax3d");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        // const url = `https://academics.newtonschool.co/api/v1/facebook/user/${authorId}`;
        console.log("11111111")

        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/facebook/user/${authorId}`,requestOptions);
            const result = await response.json();
            console.log("author details : ",result);
            console.log("222222222")
            // setSearchData(result.data);  // Ensure setSearchData is defined in your context
            if (result.status === "success") {
                alert(result.status);
            }

            if (result.status === "fail") {
                alert(result.message);
            }

            console.log(result);
        } catch (error) {
            console.error('Error:', error);
        }
    }


    // filter user ( this data pass the profile page post data )
    const getUserFilterData = async (userName) => {
        console.log("get filter data ", userName);
        const token = localStorage.getItem("token");
        if (!token) {
            console.error('Token not found');
            return;
        }

        let myHeaders = new Headers();
        myHeaders.append("projectId", "ywl8a606ax3d");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);


        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/facebook/post?filter={"author.name":${userName}}`, requestOptions)
            const result = await response.json();
            console.log("result", result);
            // setUserPersonalData(result);
        } catch (error) {
            console.error("error", error);
        }
    }


    // get user pages
    //  using channel page
    function getAllpageFun() {
        const myHeaders = new Headers();
        myHeaders.append("projectId", "ywl8a606ax3d");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`https://academics.newtonschool.co/api/v1/facebook/channel/`, requestOptions)
            .then((response) => response.json())
            .then((result) => setPagesData(result))
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        getAllpageFun();
    }, []);


    // Usage
     // Pass the field parameter dynamically


    return (
        <DataContaxt.Provider value={{ post, auth, setAuth, postFunction, authCheck, setAuthCheck, model, setModel, comment, postComments, setPostComments, AddComment, comments, setComment, newComment, setNewComment, comCount, setComcount, loginToken, setToken, SearchFunc, searchValue, setSearchValue, searchData, setSearchData, postTitle, setPostTitle, postImg, setPostImg, getUserDetailFunc, User_Details, setUserDetails, postData, setPostData, getUserFilterData, pageName, setPageName, pageCategory, setPageCategory, pageBio, setPageBio, pageProfileImg, setPageProfileImg, getAllpageFun, pagesData, setPagesData, useAllData, setUserAllData }}>
            {props.children}
        </DataContaxt.Provider>
    )
}

export const useThemeContextValue = () => useContext(DataContaxt);

export default ThemeContext;