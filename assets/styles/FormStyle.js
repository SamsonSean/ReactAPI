import { StyleSheet } from 'react-native';

export const formStyles = StyleSheet.create({
  container: {
    alignSelf: 'stretch'
  },
  header: {
    fontSize: 24,
    color: '#222d32',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#222d32',
    borderBottomWidth: 1
  },
  textinput: {
    alignSelf: 'stretch',
    color: '#222d32',
    height: 40,
    marginBottom: 30,
    borderBottomColor: '#222d32',
    borderBottomWidth: 1
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'gray'
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
})
