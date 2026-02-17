import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Image, 
  TouchableOpacity, 
  Linking, 
  SafeAreaView, 
  StatusBar,
  Dimensions
} from 'react-native';
import { Button } from 'react-native-web';

const { width } = Dimensions.get('window');

export default function App() {

  // Function to handle link opening
  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  const projects = [
    {
      title: "AquaByte",
      desc: "An automatic water irrigation system using a waterpump, ESP32 and moisture sensor"
    },
    {
      title: "Hospital Management",
      desc: "A web based Application for Hospital management using Laravel, and php"
    },
    {
      title: "OSA Violation Tracker",
      desc: "A Web-based system that tracks student violations and penalties"
    },
    {
      title: "BrowHa? Corp.",
      desc: "A Networking Case Study that designs the entire network for this corporation"
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      
      {/* Header / Navbar */}
      <View style={styles.header}>
        <Text style={styles.pageTitle}>My Portfolio</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Hero Section */}
        <View style={styles.section}>
          <View style={styles.heroContainer}>
            <TouchableOpacity onPress={() => openLink('https://www.facebook.com/wtf.jlzFCB')}>
              {/* NOTE: Replace the uri below with require('./assets/ID Picture-min.png') 
                if you have the file in your assets folder.
              */}
              <View style={styles.profileFrame}>
                  {/* THE PICTURE (The Face) */}
                  <Image 
                    source={require('../assets/images/ID Picture-min.png')} 
                    style={styles.profilePic} 
                  />
               </View>
            </TouchableOpacity>
            
            <Text style={styles.greeting}>Hello, I'm</Text>
            <Text style={styles.heroName}>Julz Christian J. Plaza</Text>
            <Text style={styles.heroRole}>IoT Developer, Mobile Developer and Network Engineer</Text>
          </View>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeaderBox}>
            <Text style={styles.sectionTitle}>About Me</Text>
          </View>
          <Text style={styles.text}>
            I am a 20-year-old <Text style={styles.boldText}>Information Technology student</Text> passionate about solving real-world problems through code. 
            My expertise lies in <Text style={styles.boldText}>System Architecture, Networking, and IoT solutions</Text>. 
          </Text>
          
          <View style={styles.infoBox}>
            <Text style={styles.text}><Text style={styles.boldText}>Education:</Text> USTP</Text>
            <Text style={styles.text}><Text style={styles.boldText}>Course:</Text> BS Information Technology</Text>
            <Text style={styles.text}><Text style={styles.boldText}>Year Level:</Text> 3rd Year</Text>
          </View>
        </View>

        {/* Projects Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeaderBox}>
            <Text style={styles.sectionTitle}>My Work</Text>
          </View>
          
          <View style={styles.projectsGrid}>
            {projects.map((project, index) => (
              <View key={index} style={styles.projectCard}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectDesc}>{project.desc}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Contact Section */}
        <View style={[styles.section, styles.lastSection]}>
          <View style={styles.sectionHeaderBox}>
            <Text style={styles.sectionTitle}>Contact Me</Text>
          </View>
          
          <TouchableOpacity onPress={() => openLink('mailto:plaza.julzchristian@gmail.com')}>
            <Text style={styles.linkText}>Email: plaza.julzchristian@gmail.com</Text>
          </TouchableOpacity>
          
          <View style={styles.socialLinks}>
            <TouchableOpacity onPress={() => openLink('https://www.facebook.com/wtf.jlzFCB')}>
              <Text style={styles.socialLink}>Facebook</Text>
            </TouchableOpacity>
            <Text style={styles.separator}>|</Text>
            <TouchableOpacity onPress={() => openLink('https://github.com/byte-jlz')}>
              <Text style={styles.socialLink}>GitHub</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 My Portfolio. All rights reserved.</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: StatusBar.currentHeight,
  },
  scrollContent: {
    paddingBottom: 20,
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  
  /* Header */
  header: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#1f1f1f',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    alignItems: 'center',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  /* Sections */
  section: {
    padding: 20,
    marginTop: 10,
  },
  sectionHeaderBox: {
    borderBottomWidth: 2,
    borderBottomColor: '#bb86fc',
    alignSelf: 'flex-start',
    marginBottom: 15,
    paddingBottom: 5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  /* Hero */
  heroContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },

  profilePic: {
    width: 170,             
    height: 240,            
    resizeMode: 'cover',
    marginTop: 0,
  },

  profileFrame: {
    width: 180,
    height: 180,
    borderRadius: 100,      
    borderWidth: 3,
    borderColor: '#bb86fc',
    overflow: 'hidden',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  greeting: {
    color: '#e0e0e0',
    fontSize: 18,
    marginBottom: 5,
  },
  heroName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroRole: {
    color: '#bb86fc',
    fontSize: 16,
    textAlign: 'center',
  },

  /* Text Styling */
  text: {
    color: '#e0e0e0',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
  infoBox: {
    marginTop: 15,
    padding: 15,
    backgroundColor: '#1f1f1f',
    borderRadius: 8,
  },

  /* Projects */
  projectsGrid: {
    gap: 15,
  },
  projectCard: {
    backgroundColor: '#1f1f1f',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  projectDesc: {
    color: '#b0b0b0',
    fontSize: 14,
    lineHeight: 20,
  },

  /* Contact */
  linkText: {
    color: '#bb86fc',
    fontSize: 16,
    marginBottom: 10,
  },
  socialLinks: {
    flexDirection: 'row',
    marginTop: 10,
  },
  socialLink: {
    color: '#bb86fc',
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    color: '#777',
    marginHorizontal: 10,
  },
  lastSection: {
    paddingBottom: 40,
  },

  /* Footer */
  footer: {
    backgroundColor: '#000000',
    marginBottom: 40,
    alignItems: 'center',
  },
  footerText: {
    color: '#777',
    fontSize: 12,
  },
});