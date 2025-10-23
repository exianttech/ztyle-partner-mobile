import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';

// styles
import styles from '@/styles/componentStyles';

// images
import storeImage from '@/assets/images/shops/store.png';

// utils
import extractActiveDays from '@/utils/extractActiveDays';
import getStandardTime from '@/utils/getStandardTime';
import getAddressLines from '@/utils/getAddressLines';

// components
import ShopMenu from './ShopMenu/ShopMenu';
import ShopReviews from './Reviews/ShopReviews/ShopReviews';

const shopDetailTabs = ({ shop }) => {

    // destructure
    const { shopName, ownerFullName, mobile, state,
        district, shopId, workingDays,
        openingTime, closingTime, advanceProfileStatus } = shop;
    
    // advanced info
    const { category, address, menu,
        shopImage } = shop;
    
    
    // format to display
    const activeWorkingDays = extractActiveDays(workingDays);
    const stdOpeningTime = getStandardTime(openingTime);
    const stdClosingTime = getStandardTime(closingTime);
    const addressLines = getAddressLines(address);

    
    // select tabs
    const [activeTab, setactiveTab] = useState("basicDetails");
    
    const renderedContent = () => {
        switch (activeTab) {
            case "basicDetails":
                return (
                    <View style={styles.cardShadow}>
                        <View style={styles.cardBody}>
                            {/* subsection */}
                            <View style={{ marginBottom: 8 }}>
                                <Text style={[styles.cardBodySubHeading, styles.textSecondary]}>Basic Information</Text>
                            </View>
                            <View style={[styles.serialRow, { marginBottom: 8 }]}>
                                <Text style={styles.fieldHeading}>Name Of The Shop</Text>
                                <Text style={styles.textSecondary}> : </Text>
                                <Text style={styles.fieldText}>{shopName}</Text>
                            </View>
                            <View style={[styles.serialRow, { marginBottom: 8 }]}>
                                <Text style={styles.fieldHeading}>Owner's FullName</Text>
                                <Text style={styles.textSecondary}> : </Text>
                                <Text style={styles.fieldText}>{ownerFullName}</Text>
                            </View>
                            <View style={[styles.serialRow, { marginBottom: 8 }]}>
                                <Text style={styles.fieldHeading}>Mobile Number</Text>
                                <Text style={styles.textSecondary}> : </Text>
                                <Text style={styles.fieldText}>{mobile}</Text>
                            </View>
                            <View style={[styles.serialRow, { marginBottom: 8 }]}>
                                <Text style={styles.fieldHeading}>State</Text>
                                <Text style={styles.textSecondary}> : </Text>
                                <Text style={styles.fieldText}>{state}</Text>
                            </View>
                            <View style={[styles.serialRow, { marginBottom: 8 }]}>
                                <Text style={styles.fieldHeading}>District</Text>
                                <Text style={styles.textSecondary}> : </Text>
                                <Text style={styles.fieldText}>{district}</Text>
                            </View>
                            {/* subsection */}
                             <View style={{ marginBottom: 8 }}>
                                <Text style={[styles.cardBodySubHeading, styles.textSecondary]}>Shop Info</Text>
                            </View>
                            <View style={[styles.serialRow, { marginBottom: 8 }]}>
                                <Text style={styles.fieldHeading}>Shop Id</Text>
                                <Text style={styles.textSecondary}> : </Text>
                                <Text style={styles.fieldText}>{shopId}</Text>
                            </View>
                            <View style={[styles.serialRow, { marginBottom: 8, alignItems: 'flex-start' }]}>
                                <Text style={styles.fieldHeading}>Working Days</Text>
                                <Text style={styles.textSecondary}> : </Text>
                                <View style={{ flexDirection: 'column' }}>
                                {
                                    activeWorkingDays.map((day, idx) => (
                                        
                    
                                            <Text key={idx} style={styles.fieldText}>{day}</Text>
                                       
                                        
                                    ))
                                    }
                                </View>
                            </View>
                            <View style={[styles.serialRow, { marginBottom: 8 }]}>
                                <Text style={styles.fieldHeading}>Opening Time</Text>
                                <Text style={styles.textSecondary}> : </Text>
                                <Text style={styles.fieldText}>{stdOpeningTime}</Text>
                            </View>
                            <View style={[styles.serialRow, { marginBottom: 8 }]}>
                                <Text style={styles.fieldHeading}>Closing Time</Text>
                                <Text style={styles.textSecondary}> : </Text>
                                <Text style={styles.fieldText}>{stdClosingTime}</Text>
                            </View>


                        </View>
                    </View>
                )
            case "advancedInfo":
                return (
                    <View style={styles.cardShadow}>
                        <View style={styles.cardBody}>
                            {
                                // check existence of advance profile status
                                advanceProfileStatus ? (
                                    <>
                                        {/* subsection */}
                                        <View style={{ marginBottom: 8 }}>
                                            <Text style={[styles.cardBodySubHeading, styles.textSecondary]}>More Info About The Shop</Text>
                                        </View>
                                        <View style={[styles.serialRow, { marginBottom: 8 }]}>
                                            <Text style={styles.fieldHeading}>Category Of The Shop</Text>
                                            <Text style={styles.textSecondary}> : </Text>
                                            <Text style={styles.fieldText}>{category}</Text>
                                        </View>
                                        <View style={[styles.serialRow, { marginBottom: 8, alignItems: 'flex-start' }]}>
                                            <Text style={styles.fieldHeading}>Address</Text>
                                            <Text style={styles.textSecondary}> : </Text>
                                            <View style={{ flexDirection: 'column' }}>
                                                {
                                                    addressLines.map((line, idx) => (
                                                        <Text key={idx} style={styles.fieldText}>{line}{"," }</Text>
                                                    ))
                                                }
                                            </View>
                                        </View>
                                         {/* subsection */}
                                        <View style={{ marginBottom: 8 }}>
                                            <Text style={[styles.cardBodySubHeading, styles.textSecondary]}>Shop's Menu</Text>
                                        </View>
                                        <ShopMenu menu={menu} />
                                    </>
 
                                )
                                    
                                    :
                                    <>
                                        <View style={styles.cardHeader}>
                                            <Text style={styles.textBold}>Shop Profile Status</Text>
                                        </View>
                                        <View style={styles.cardBody}>
                                            <View style={styles.alertContainer}>
                                                <View style={[styles.alert, styles.info]}>
                                                    <Text style={[styles.alertText,styles.alertTextBold]}>Advance Info Of The Shop Is Empty !!!</Text>
                                                    <Text style={styles.alertText}>Please Wait a While Fill Up The Same.</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </>
                            }
                        </View>
                    </View>
                )
            case "photos":
                return (
                    <>
                        <View style={styles.cardShadow}>
                            <View style={styles.cardBody}>
                                <Image
                                    source={shopImage}
                                    style={styles.shopImage}
                                    resizeMode='cover'
                                />
                                <Text style={styles.cardBodySubHeading}>Main Shop Image</Text>
                                <Text style={styles.textGray}>This is the primary view of the salon. It helps you quickly recognize the shop from the outside.</Text>
                            </View>
                        </View>
                        <View style={styles.cardShadow}>
                            <View style={styles.cardBody}>
                                <Image
                                    source={storeImage}
                                    style={styles.shopImage}
                                    resizeMode='cover'
                                />
                                <Text style={styles.cardBodySubHeading}>Inside View</Text>
                                <Text style={styles.textGray}>Take a look at the interior setup and atmosphere. This gives you a feel of the salon’s comfort and vibe before you visit.</Text>
                            </View>
                        </View>
                        <View style={styles.cardShadow}>
                            <View style={styles.cardBody}>
                                <Image
                                    source={storeImage}
                                    style={styles.shopImage}
                                    resizeMode='cover'
                                />
                                <Text style={styles.cardBodySubHeading}>Service Preview</Text>
                                <Text style={styles.textGray}>A glimpse of the services and facilities available inside. This helps you understand what to expect when booking.</Text>
                            </View>
                        </View>
                    </>
                    
                )
            case "beauticians":
                return (
                    <>
                        <View style={[styles.cardShadow, { marginBottom: 32 }]}>
                            <View style={styles.cardBody}>
                                <View style={styles.alertContainer}>
                                    <View style={[styles.alert, styles.success]}>
                                        <Text style={[styles.alertText, styles.alertTextBold]}>Beauticians Associated With The Shop</Text>
                                        <Link href={`/(screensUser)/BeauticiansByShopId/${shopId}`}><Text style={styles.alertText}>see the list</Text></Link>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <Text style={[styles.cardBodySubHeading, { marginBottom: 16 }]} >View The Beauticians</Text>
                        <Text style={styles.textGray}>
                            Click the above mentioned link to view beauticians registered under the specified shop.
                        </Text>
                    </>
                )
            case "reviews":
                return (
                    <View style={styles.cardShadow}>
                        <View style={styles.cardBody}>
                            <ShopReviews />
                        </View>
                    </View>
                )
            
        }
    }

    return (
        <View style={{ flex: 1 }}>
            {/* Tabs Header */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.tabHeader}
            >
                {
                    [
                        { key: "basicDetails", label: "Basic Details" },
                        { key: "advancedInfo", label: "Advance Info" },
                        { key: "photos", label: "Photos" },
                        { key: "beauticians", label: "Beauticians" },
                        { key: "reviews", label: "Reviews" }
                    ].map((tab, idx) => (
                        <TouchableOpacity
                            key={idx}
                            onPress={() => setactiveTab(tab.key)}
                            style={[styles.tab, activeTab === tab.key && styles.activeTabUser]}
                        >
                            <Text style={[styles.tabText, activeTab === tab.key && styles.activeTabTextUser]}>
                                {tab.label}
                            </Text>

                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
            {/* Tab Content */}
            <ScrollView style={styles.tabContent}>
                {
                    renderedContent()
                }
            </ScrollView>
        </View>
    )
}

export default shopDetailTabs