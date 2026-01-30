import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Pressable, Text, View, StyleSheet, FlatList } from "react-native";

const PETS = [
  {
    id: 'rand_id1',
    name: 'Simba',
    animal: 'cat',
    breed: 'Ginger Cat',
    photoUrl: 'none',
    gender: 'Male',
    weight: '3.9Kg',
    age: '1 year',
    allergies: 'none',
    illnesses: 'none',
    ownerId: 'owner_Id',
    medication: 'none',
    vaccines: {
      Rabies: {
        last_dose: '29 december 2025',
        next_dese: '29 january 2026'
      },
      Triple_Feline: {
        last_dose: '19 november 2025',
        next_dose: 'none',
      }
    },
    consults: [
      {
        id: 'random_id_xd',
        type: 'Consult',
        attending_veterinarian: 'Dr. Example',
        time: 'Wed Jan 28 2026 09:20:00',
        notes: 'Concerns about redness around scar tissue, antibiotics ordered for two weeks. Closing nicely, vitals good otherwise.',
        prescription: {
          name: 'Amoxicillin',
          amount: '1/2 tablet',
          frequency: '12 hours',
          time: '2 weeks'
        },
      },
      {
        id: 'consult_002',
        type: 'Consult',
        attending_veterinarian: 'Dr. Laura Smith',
        time: 'Fri Jan 30 2026 14:45:00',
        notes: 'Annual checkup performed. Weight stable, coat healthy. Mild tartar buildup observed; dental cleaning recommended within the year.',
        prescription: {
          name: 'None',
          amount: '-',
          frequency: '-',
          time: '-'
        },
      },
      {
        id: 'consult_003',
        type: 'Consult',
        attending_veterinarian: 'Dr. Miguel Alvarez',
        time: 'Mon Feb 02 2026 11:10:00',
        notes: 'Presented with intermittent limping on right hind leg. No fracture detected on exam. Rest advised and anti-inflammatory prescribed.',
        prescription: {
          name: 'Carprofen',
          amount: '1 tablet',
          frequency: '24 hours',
          time: '5 days'
        },
      },
      {
        id: 'consult_004',
        type: 'Consult',
        attending_veterinarian: 'Dr. Hannah Lee',
        time: 'Thu Feb 05 2026 16:00:00',
        notes: 'Vomiting reported over last 24 hours. Abdomen soft on palpation. Likely dietary indiscretion. Bland diet recommended.',
        prescription: {
          name: 'Metoclopramide',
          amount: '5 ml',
          frequency: '8 hours',
          time: '3 days'
        },
      },
      {
        id: 'consult_005',
        type: 'Consult',
        attending_veterinarian: 'Dr. James Carter',
        time: 'Sun Feb 08 2026 10:30:00',
        notes: 'Skin itching and redness observed around ears and paws. Possible allergic reaction. Monitoring response to treatment.',
        prescription: {
          name: 'Prednisone',
          amount: '1 tablet',
          frequency: '24 hours',
          time: '7 days'
        },
      },
      {
        id: 'consult_006',
        type: 'Consult',
        attending_veterinarian: 'Dr. Sofia Mendes',
        time: 'Wed Feb 11 2026 13:15:00',
        notes: 'Vaccinations updated. Mild lethargy expected for next 24 hours. Owner advised to monitor appetite and activity.',
        prescription: {
          name: 'None',
          amount: '-',
          frequency: '-',
          time: '-'
        },
      },
      {
        id: 'consult_007',
        type: 'Consult',
        attending_veterinarian: 'Dr. Robert Nguyen',
        time: 'Sat Feb 14 2026 09:50:00',
        notes: 'Follow-up visit post dental procedure. Healing well, no signs of infection. Sutures intact.',
        prescription: {
          name: 'Meloxicam',
          amount: '0.1 ml',
          frequency: '24 hours',
          time: '3 days'
        },
      },
    ]
  },
  {
    id: 'rand_id2',
    name: 'Manuela',
    breed: 'White Maltese Poodle',
    animal: 'dog',
    photoUrl: 'none',
    gender: 'Male',
    weight: '3.9Kg',
    age: '1 year',
    allergies: 'none',
    illnesses: 'none',
    ownerId: 'owner_Id',
    medication: 'none',
    vaccines: {
      Rabies: {
        last_dose: '29 december 2025',
        next_dese: '29 january 2026'
      },
      Triple_Feline: {
        last_dose: '19 november 2025',
        next_dose: 'none',
      }
    },
    consults: [
      {
        id: 'random_id_xd',
        type: 'Consult',
        attending_veterinarian: 'Dr. Example',
        time: 'Wed Jan 28 2026 09:20:00',
        notes: 'Concerns about redness around scar tissue, antibiotics ordered for two weeks. Closing nicely, vitals good otherwise.',
        prescription: {
          name: 'Amoxicillin',
          amount: '1/2 tablet',
          frequency: '12 hours',
          time: '2 weeks'
        },
      },
      {
        id: 'consult_002',
        type: 'Consult',
        attending_veterinarian: 'Dr. Laura Smith',
        time: 'Fri Jan 30 2026 14:45:00',
        notes: 'Annual checkup performed. Weight stable, coat healthy. Mild tartar buildup observed; dental cleaning recommended within the year.',
        prescription: {
          name: 'None',
          amount: '-',
          frequency: '-',
          time: '-'
        },
      },
      {
        id: 'consult_006',
        type: 'Consult',
        attending_veterinarian: 'Dr. Sofia Mendes',
        time: 'Wed Feb 11 2026 13:15:00',
        notes: 'Vaccinations updated. Mild lethargy expected for next 24 hours. Owner advised to monitor appetite and activity.',
        prescription: {
          name: 'None',
          amount: '-',
          frequency: '-',
          time: '-'
        },
      },
      {
        id: 'consult_007',
        type: 'Consult',
        attending_veterinarian: 'Dr. Robert Nguyen',
        time: 'Sat Feb 14 2026 09:50:00',
        notes: 'Follow-up visit post dental procedure. Healing well, no signs of infection. Sutures intact.',
        prescription: {
          name: 'Meloxicam',
          amount: '0.1 ml',
          frequency: '24 hours',
          time: '3 days'
        },
      },
    ]
  }
]

const getTabs = (pet) => [
  { key: 'summary', label: 'Summary' },
  { key: 'consults', label: 'Consults', count: pet.consults?.length ?? 0 },
  {
    key: 'vaccines',
    label: 'Vaccines'
  },
  { key: 'records', label: 'Records' },
  { key: 'notes', label: 'Notes' },
];

export default function Files() {
  const [openPetId, setOpenPetId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('summary');

  return (
    <View style={{ backgroundColor: 'white', width: '100%', height: '100%', paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
      {PETS.map(pet => {
        const isOpen = openPetId === pet.id;
        return (
          <View key={pet.id} style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}>
            <Pressable onPress={() => setOpenPetId(isOpen ? null : pet.id)}>
              <View style={isOpen ? styles.pet_header_open : styles.pet_header_closed}>
                <Image
                  source={require('../../assets/images/paw_white_two.png')}
                  style={{ height: 33, width: 46 }}
                />
                <Text style={{ fontSize: 24, color: 'white', fontWeight: 400 }}>
                  {pet.name}
                </Text>
                <Ionicons name={isOpen ? "chevron-up" : "chevron-down"} size={30} color="#FFF" />
              </View>
            </Pressable>
            {isOpen && (
              <View style={{ height: '92%', backgroundColor: '#C9E7AE', padding: 10, borderBottomLeftRadius: 5, borderBottomRightRadius: 5, display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '100%', height: '100%', borderRadius: 5, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <View style={{ height: '4%', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    {getTabs(pet).map(tab => (
                      <Pressable key={tab.key} onPress={() => setActiveTab(tab.key)}>
                        <Text style={[styles.unactiveTab, activeTab === tab.key && styles.activeTab]}>
                          {tab.label}
                          {typeof tab.count === 'number' && ` (${tab.count})`}
                        </Text>
                      </Pressable>
                    ))}
                  </View>
                  <View style={{
                    backgroundColor: 'white',
                    width: '100%',
                    height: '95%',
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    padding: 5,
                    display: 'flex',
                    alignItems: 'center'
                  }}>

                    {/*SUMMARY TAB*/}

                    {activeTab === 'summary' && (
                      <View style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                        <View style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                          <Pressable onPress={() => console.log('switch image')}>
                            <Image source={require('../../assets/images/dots.png')}
                              style={{ width: 30, height: 12, position: "absolute", top: 128, left: 110, zIndex: 1, backgroundColor: 'white', borderRadius: 3 }} />
                            <Image
                              source={
                                pet.animal === 'cat'
                                  ? require('../../assets/images/placeholder-cat.png')
                                  : require('../../assets/images/placeholder-dog.png')
                              }
                              style={{ width: 150, height: 150, borderRadius: 5 }}
                            />
                          </Pressable>
                          <View style={{ marginLeft: 15, display: 'flex', justifyContent: 'space-around' }}>
                            <View><Text style={{ fontSize: 16, margin: 5 }}>{pet.breed}</Text> </View>
                            <View style={styles.summary_list_container}>
                              <Image source={require('../../assets/images/male.png')} style={{ width: 15, height: 15 }} />
                              <Text style={{ fontSize: 16, margin: 5 }}>{' •  '}{pet.gender} </Text> </View>
                            <View style={styles.summary_list_container}>
                              <Image source={require('../../assets/images/weight.png')} style={{ width: 15, height: 15 }} />
                              <Text style={{ fontSize: 16, margin: 5 }}>{' •  '}{pet.weight} </Text> </View>
                            <View style={styles.summary_list_container}>
                              <Image source={require('../../assets/images/cake.png')} style={{ width: 15, height: 15 }} />
                              <Text style={{ fontSize: 16, margin: 5 }}>{' •  '}{pet.age} </Text> </View>
                          </View>
                        </View>
                        <View style={{ margin: 8, width: '95%', height: 1, backgroundColor: 'gray' }}></View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                          <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <View style={{ borderRadius: 5, backgroundColor: '#EE2623', padding: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '80%' }}>
                              <Image source={require('../../assets/images/warning.png')} style={{ width: 22, height: 22 }} />
                              <Text style={{ color: 'white', fontSize: 16 }}>{pet.allergies === 'none' ? 'No Allergies' : pet.allergies}</Text></View>
                            <View style={{ borderRadius: 5, backgroundColor: '#F19900', padding: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '80%' }}>
                              <Image source={require('../../assets/images/warning.png')} style={{ width: 22, height: 22 }} />
                              <Text style={{ color: 'white', fontSize: 16 }}>{pet.illnesses === 'none' ? 'No illnesses' : pet.illnesses}</Text></View>
                          </View>
                          <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <Text style={{ fontSize: 16, margin: 5 }}>{pet.ownerId}</Text>
                            <View style={styles.summary_list_container}>
                              <Image source={require('../../assets/images/call.png')} style={{ width: 15, height: 15 }} />
                              <Text style={{ fontSize: 16, margin: 5 }}>{' •  '}{pet.ownerId}</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    )}

                    {/*CONSUlTS TAB */}

                    {activeTab === 'consults' && (
                      <View style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                        {pet.consults.map(consult =>
                          <View key={consult.id} style={{ gap: 5, margin: 5, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={{ width: 36, height: 30 }} source={require('../../assets/images/heartbeat.png')} />
                            <View>
                              <Text style={{ fontSize: 18 }}>{consult.type} - {consult.attending_veterinarian}</Text>
                              <Text style={{ fontSize: 12 }}>{consult.time}</Text>
                            </View>
                            <Pressable onPress={() => console.log('info press', consult.id)}>
                              <Ionicons name="information-circle-outline" size={30}></Ionicons>
                            </Pressable>
                          </View>)}
                      </View>
                    )}
                  </View>
                </View>
              </View>)}
          </View>);
      })}
    </View >
  );
}

const styles = StyleSheet.create({
  pet_header_closed: {
    width: '100%',
    backgroundColor: '#5C9E3F',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
  pet_header_open: {
    width: '100%',
    backgroundColor: '#5C9E3F',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  activeTab: {
    backgroundColor: 'white',
    borderRadius: 0,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    padding: 2,
    fontSize: 14,
    height: 30
  },
  unactiveTab: {
    backgroundColor: '#EFEFEF',
    borderRadius: 0,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    padding: 2,
    fontSize: 14,
  },
  summary_list_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }

})