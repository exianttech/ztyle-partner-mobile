import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    /// general styles
    
    // color
    primary: {
        backgroundColor: "#222"
    },
    secondary: {
        backgroundColor: '#17a2b8'
    },
    success: {
        backgroundColor: '#37D159'
    },
    info: {
        backgroundColor: '#b48dd3'
    },
    warning: {
        backgroundColor: '#FFC368'
    },
    danger: {
        backgroundColor: '#FF6746'  
    },
    smokeBackground: {
        backgroundColor: 'whitesmoke'
    },
    whiteBackground: {
        backgroundColor: '#fff'
    },
    authBackground: {
        backgroundColor: '#d1d1e0'
    },
    dashBg1: {
        backgroundColor: '#222'
    },
    dashBg2: {
        backgroundColor: '#6666ff'
    },
    dashBg3: {
        backgroundColor: '#777'
    },
    dashBg4: {
        backgroundColor: '#00cc88'
    },
    initialsBg: {
        position: 'absolute',
        top:-40,
        width: 80, // equal width & height for perfect circle
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40, // half of width/height for circle
        padding: 4,
        borderWidth: 2,
        borderColor: "#20c997"
    },

     // containers
    container: {
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal:2
    },
    center: {
        justifyContent: 'center',
        alignItems:'center',
    },
    between: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    contentBody: {
        paddingTop: 8,
        paddingHorizontal: 0
    },
    authContent: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical:24,
        borderRadius:8
    },
    profileAvatarWrapper: {
        position: 'absolute',
        top: -40,
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // needed for shadow to be visible
        elevation: 4, // Android shadow
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },

    // card styles
    card: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: 8, // equivalent to 0.75rem
        padding: 8,
        marginVertical: 15,
        elevation: 2, // slight shadow for Android
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
    },
    cardShadow: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: 8, // equivalent to 0.75rem
        padding: 8,
        marginVertical: 15,
        elevation: 2, // slight shadow for Android
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    dashCard: {
        borderRadius: 12,
        padding: 8,
        marginVertical: 8,
        elevation: 2, // slight shadow for Android
    },
    cardHeader: {
        padding: 16,
        borderBottomWidth: 1,
        borderColor: "#f0f0f0",
        marginBottom: 16
        
    },
    cardBody: {
        padding: 8 
    },

    // shadows
    shadow: {
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 2 // for Android shadow
    },
    textShadow: {
        textShadowColor: 'rgba(20, 20, 20, 0.2)', // very subtle shadow
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1.5,
    },
    initialsBgShadow: {
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    profileAvatarShadow: {
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },

     // divider
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
        marginHorizontal: 10
    },
    whiteLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#fff',
        marginHorizontal: 10
    },

    // alerts
    alertContainer: {
        justifyContent: 'center',
        alignItems: "center",
        marginVertical: 8
    },
    centerAlertContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: "center",
        padding: 12

    },
    alert: {
        width: "100%",
        padding: 10,
        borderRadius: 16 
    },
    alertText: {
        textAlign: 'center',
        color: 'white',
        marginBottom: 4
    },
    alertTextBold: {
            fontWeight: 'bold'
    },
    // text
    largeHeading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 12
    },
    dashCardCount: {
        fontFamily: 'JostBold',
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingBottom: 8 
    },
    subHeading: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardBodyHeading: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 8 
    },
    cardBodySubHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8
    },
    cardBodyText: {
        fontSize: 16,
        color: 'gray',
        lineHeight:24,
        marginBottom: 32,
        opacity:0.8
    },
    textSecondary: {
        color: '#17a2b8'
    },
    textSuccess: {
        color: '#37D159'
    },
    textInfo: {
        color: '#b48dd3'
    },
    textWarning: {
        color: '#FFC368'
    },
    textDanger: {
        color: '#FF6746'
    },
    textGray: {
        color: '#999'
    },
    textWhite: {
        color: '#fff'
    },
    textCenter: {
        textAlign:'center'
    },
    textBold: {
        fontWeight: 'bold'
    },
    fieldHeading: {
        fontFamily: 'JostBold',
        fontSize: 14,
        fontWeight: 'bold'
    },
    fieldText: {
        fontFamily: 'JostRegular',
        fontSize: 14,
        color: '#999'
    },
    rating: {
        backgroundColor: '#b48dd3',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 16,
        marginBottom: 12
    },
    ratingText: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#fff',
        marginRight: 8
    },
    initialsBgText: {
        fontFamily: 'DancingScriptBold',
        fontSize: 32,
        fontWeight:'bold'
    },
    generalDescription: {
        fontSize: 16,
        marginHorizontal: 12,
        lineHeight: 20
    },
    textArea: {
        height: 120,
        textAlignVertical: 'top',
        padding: 12
    },
    // images
    imageFluid: {
        width: '100%',
        height: 200,
        marginBottom: 24
    },
    authBgImage: {
        width: 200,
        height: 80,
        marginBottom: 16
    },
    loginBgImage: {
        width: 350,
        height: 250,
        marginVertical:8
    },
    shopImage: {
        width: 290,
        height: 220,
        marginBottom: 16,
        borderRadius: 12
    },
    profilePicPhoto: {
        width: 300,
        height: 400,
        marginBottom: 16,
        borderRadius: 12
    },
    profileAvatar: {
        width: 76, // equal width & height for perfect circle
        height: 76,
        borderRadius: 38, // half of width/height for circle
        borderWidth: 2,
        borderColor: "#17a2b8"
    },
     // button
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonLink: {
        width:"50%",
        padding: 8,
        marginHorizontal: 5,
        borderRadius: 5
    },
    buttonLarge: {
        flexDirection: 'row',
        height: 50,
        padding: 12,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    profilePicAccessButton: {
        position: 'absolute',
        right: 5,
        top: 5,
        backgroundColor: '#d1d1e0',
        width: 45,
        height: 45,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    floatBackButton: {
        position: 'absolute',
        width:60,
        bottom: 20,
        left: 20,
        borderRadius: 20,
        padding: 12,
        elevation: 5, // android shadow
        shadowColor: "#000", // iOS shadow
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    
    // forms
    authFormContainer: {
        marginVertical: 8,
        padding: 8
    },
    formGroup: {
        paddingHorizontal: 16,
        marginBottom: 8
    },
    formGroupLabel: {
        color: 'gray',
        fontFamily: 'JostBold',
        fontSize: 16,
        marginBottom: 6
        
    },
    formGroupTextInput: {
        width: '100%',
        backgroundColor: 'white',
        fontSize: 14,
        color:'#969ba0',
        borderColor: '#F2F2F2',
        borderWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius:12
        
    },
    formGroupTextInputFocused: {
        borderColor: '#606060', // highlight color when selected
        borderWidth: 2
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    inputWithIcon: {
        paddingRight: 40, // space for the icon
    },
    iconContainer: {
        position: 'absolute',
        right: 12,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
        paddingHorizontal: 8
    },
    checkboxLabel: {
        marginLeft: 8,
        fontSize: 16,
        color: "#999",
    },
    // media
    mediaSecondary: {
        backgroundColor: '#8ee4f1'  
    },
    mediaInfo: {
        backgroundColor: '#e7daf1' 
    },
    mediaSuccess: {
        backgroundColor: '#acecba' 
    },
    mediaWarning: {
        backgroundColor: '#ffebcc'
    },
    mediaDanger: {
        backgroundColor: '#ffd5cc'
    },
    mediaGray: {
        backgroundColor: '#e6e6e6'
    },

    /// component styles

    // navbar
    navBarContainer: {
        backgroundColor: 'white',
        minHeight: 80,
        paddingHorizontal: 16,
        paddingTop:14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    navHeaderLogo: {
        width: 40,
        height: 50,
        resizeMode: 'contain'
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },

    headerIconContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    headerIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical:4,
        paddingHorizontal: 8,
        margin:4,
        borderRadius: 16,
        elevation: 2, // slight shadow for Android
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    headerIconsole: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical:8,
        paddingHorizontal: 16,
        margin:4,
        borderRadius: 16,
        elevation: 2, // slight shadow for Android
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        position: 'relative'
        
    },
    headerIconText: {
        fontSize: 10,
        color: '#17a2b8',
        flexShrink: 1,
        textAlign: 'center'
    },
    headerButton: {
        backgroundColor: '#17a2b8',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        paddingHorizontal: 12,
        paddingVertical:14,
        borderRadius: 16,
        flexShrink: 0
    },
    headerButtonText: {
        fontSize: 12,
        color: 'white',
        marginLeft: 8
    },

    // notification
     notificationDot: {
        position: 'absolute',
        top: 4,
        right: 4,
        width: 15,
        height: 15,
        backgroundColor: '#FFC368',
        borderRadius: 10,
        borderWidth: 2,
        borderColor:'white'
    },
    notDropMenu: {
        position: 'absolute',
        top: 82, // just below the avatar
        right:2,
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.15)',
        paddingVertical: 6,
        paddingHorizontal: 12,
        width: 300,
        height: 400,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        zIndex: 999
    },
    notContainer: {
        padding: 8,
    },
    singleNotContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingVertical: 12,
        borderBottomColor: '#f0f0f0',
        borderBottomWidth: 1
    },
    notInitials: {
        width: 50, 
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        padding:4
    },
    notInitialsText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    notContent: {
        padding: 8
    },
    notMessage: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom:8
    },
    notTime: {
        color: 'gray',
        fontSize: 12
    },

    // userInfo
    initialsBg: {
        width: 50, // equal width & height for perfect circle
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25, // half of width/height for circle
        padding:4
    },
    avatar: {
        width: 56, // equal width & height for perfect circle
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#17a2b8',
        borderWidth: 1,
        borderRadius: 28, // half of width/height for circle
        paddingHorizontal: 4
    },

    initialsBgText: {
        fontSize: 24,
        fontWeight:'bold'
    },
    // dopdowns
    dropdownMenu: {
        position: 'absolute',
        top: 82, // just below the avatar
        right: 2,
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.15)',
        paddingVertical: 6,
        paddingHorizontal: 12,
        minWidth: 160,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        zIndex: 999
    },
    profileDropdownMenu: {
        position: 'absolute',
        top: 50, // just below the avatar
        right: 2,
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.15)',
        paddingVertical: 6,
        paddingHorizontal: 12,
        minWidth: 160,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        zIndex: 999
    },
    dropdownItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12
    },
    dropdownText: {
        fontSize: 14,
        color: '#464a53',
        marginLeft: 8
    },
    overlay: {
        ...StyleSheet.absoluteFillObject, // ensures it covers the entire screen
        zIndex: 100
    },

    // charts
    radialDonutContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    radialDonutText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333", 
    },
    
    /// list cards

    // small 
    smallListCardContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderColor: '#f0f0f0',
        borderWidth: 1,
        marginVertical: 12,
        borderRadius: 12
    },
    squareAvatar: {
        width: 80,
        height: 80,
        marginHorizontal: 12,
        borderRadius: 12
    },
    listCardContent: {
        flex: 1,
        padding: 8
    },
    listCardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom:8
    },
    listCardDate: {
        color: 'gray',
        fontSize: 12,
        marginBottom: 8,
        flexShrink: 1,
        flexWrap: 'wrap'
    },

    // large
    largeListCardContainer: {
        flexWrap: 'wrap',
        flexDirection: 'column',
        paddingVertical: 12,
        borderBottomColor: '#f0f0f0',
        borderBottomWidth: 1,
        marginVertical: 12,
        borderRadius: 12
    },
    largeListCardRow: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingBottom: 16
    },
    largeListCardDescription: {
        fontSize:16,
        marginHorizontal: 12,
        lineHeight:20
    },
    // rating & review 
    startRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    star: {
        marginRight: 4 
    },
    
    // latest booking
    squareInitials: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 12,
        borderRadius: 12
    },

    // pageTitle
    pageTitleContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 16,
        marginHorizontal: 8,
        borderRadius: 12
    },
    motherMenu: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#17a2b8'
    },
    activeMenu: {
        fontSize: 20,
        color: '#999'
    },
    menuSeparator: {
        fontSize:20,
        marginHorizontal: 12,
        color: '#6666ff'
    },

    // lists
    listContainer: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems:'center',
        margin: 8,
        paddingVertical: 24,
        borderRadius: 12,  
    },
    listImage: {
        width: 300,
        height: 350,
        marginBottom: 16 
    },
    listTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16
    },
    listText: {
        fontSize: 16,
        marginBottom: 16
    },

    dataListContainer: {
        position: "absolute",
        top: 50, // adjust to match input height + spacing
        left: 0,
        right: 0,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        maxHeight: 150,
        zIndex: 10,
        elevation: 5, // for Android shadow
        shadowColor: "#000", // for iOS shadow
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    dataListItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    // tabs
    tabHeader: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomWidth: 1,
        borderColor: "#ddd",
    },
    tab: {
        paddingVertical: 10,
        paddingHorizontal: 16,
    },
    activeTab: {
        borderBottomWidth: 3,
        borderColor: "#17a2b8"
    },
    tabText: {
        fontSize: 16,
        color: "#555"
    },
    activeTabText: {
        color: "#17a2b8",
        fontWeight: 'bold'
    },
    tabContent: {
        padding: 0,
    },

    // shopMenu
    grayCardContainer: {
        padding: 8
    },
    grayCard: {
        backgroundColor: '#ddd',
        padding: 12,
        margin: 8
        
    },
    
    // modals
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)", // dark backdrop
    },
    modalContainer: {
        width: "80%",
        backgroundColor: "white",
        borderRadius: 12,
        padding: 20,
        elevation: 10, // shadow for Android
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    modalMessage: {
        color: "#999",
        fontSize: 14,
        textAlign: "center",
        marginBottom: 20,
    },
    modalButton: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginHorizontal: 5,
    },
    modalCancel: {
        backgroundColor: '#222'
    },
    modalButtonText: {
        color: "white",
        fontWeight: "bold",
    },

    modalConfirm: {
        backgroundColor: '#17a2b8'
    },
    modalConfirmDanger: {
        backgroundColor: '#FF6746'
    },
    modalConfirmWarning: {
        backgroundColor: '#FFC368'
    },

     /// footer

    // modal
    modalFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    // general
    footerContainer: {
        backgroundColor:'white',
        paddingVertical: 8,
        paddingHorizontal: 0
    },
    copyright: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    copyrightComp: {
        color:'#17a2b8'
    },
    footerLinkContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:8

    },
    footerLink: {
        fontSize: 12,
        color:'gray'
    },

    // error screens
    errorContainer: {
        marginVertical: 8
    },
    errorText: {
        color: '#FF6746',
        textAlign: 'center',
        fontSize:16
    },
    

    /// bootstrap 
    row: {
        flexDirection: 'column',
        justifyContent: 'space-between'   
    },
    serialRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    column: {
        paddingHorizontal: 8
    }
})


export default styles
