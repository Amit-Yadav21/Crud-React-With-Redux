### **Project Description: Dynamic CRUD Application with React and Redux**

This project showcases a user-friendly CRUD (Create, Read, Update, Delete) application built using **React** for the frontend and **Redux** for state management. It focuses on delivering a seamless and dynamic user experience with interactive features and a responsive design.

### **Key Features:**
1. **Dynamic Popup Form**: 
   - Add or edit entries with a clean, modal-based form. 
   - Includes real-time input validation for error-free submissions.
   - `Crud_popupFrom` handles both adding and editing items. 
   - Form validation is integrated using `crudValidation`.
   - Dynamic fields and file upload support for a logo/image.

2. **State Management with Redux**: 
   - Efficiently handles data operations and state updates, ensuring smooth interactions.

3. **Redux Integration**:
   - State is managed using Redux with actions for adding, updating, and deleting items.
   - Data is retrieved from the Redux store via `useSelector`.

4. **CRUD Operations**:
   - Items can be added, edited, or deleted.
   - The `handleSave` function distinguishes between adding and editing based on the presence of an `id`.

5. **Material-UI Integration**:
   - A polished and responsive user interface with ready-to-use, customizable components.

6. **Toast Notifications**: 
   - Immediate feedback for user actions like adding, updating, or deleting records using **React-Toastify**.
   - Success/Error messages are displayed using `react-toastify`.

7. **Load More Feature**: 
   - Enhances user experience by allowing incremental loading of data for better navigation.
   - Pagination is simulated by showing a subset of items and allowing more to be displayed on clicking "Load More"

8. **Responsive Styling**:
   - Material-UI is used for styling.
   - Cards and buttons are styled with clear hover effects.

9. **Fully Responsive Design**: 
   - Optimized for all devices, providing a consistent experience on desktops, tablets, and mobile phones.

### **Tools & Technologies Used:**
- **React**: For building a dynamic and component-based UI.
- **Redux**: For centralized state management and predictable data flow.
- **Material-UI**: For designing responsive and visually appealing components.
- **React-Toastify**: For customizable notifications.

---

This project is designed to address real-world use cases where managing dynamic data with an intuitive UI is essential. It also reflects a strong focus on clean code practices, reusability, and responsiveness.

---

### **File: Crud_popupFrom.jsx**  
**Imports:**  
1. `React`, `useState`, `useEffect` - React's core library and hooks for state management and side effects.  
2. MUI Components: `Box`, `TextField`, `Dialog`, `DialogActions`, `DialogContent`, `DialogTitle`, `Button` - For UI components.  
3. `react-toastify` - For displaying toast notifications.  
4. `crudValidation` - A custom validation module imported from `../validation/crudValidation`.  
5. Icons: `ImCancelCircle`, `VscSaveAs` - Used in buttons for cancel and save actions.

**Component: Crud_popupFrom**
- Accepts props: `open`, `onClose`, `onSave`, `initialData`.
- **State Variables:**
  - `formData`: Holds the current form's data.
  - `errors`: Tracks validation errors.
- **useEffect:** Resets `formData` and `errors` when `initialData` changes.
- **Functions:**
  - `validateField`: Validates a single field using `crudValidation`.
  - `handleChange`: Updates `formData` and validates the field.
  - `handleFileChange`: Handles file uploads and updates `formData` with the selected file.
  - `handleSave`: Validates the form and triggers `onSave` if valid.
- **UI:**
  - Uses `Dialog` for a popup form with input fields like `institution`, `status`, `joiningDate`, `endDate`, etc.
  - File input for uploading a logo.
  - Buttons for Cancel (`ImCancelCircle`) and Save (`VscSaveAs`).

---

### **File: Crud.jsx**  
**Imports:**  
1. `React`, `useState` - React core and hooks.  
2. MUI Components: `Box`, `Typography`, `Card`, `CardContent`, `CardMedia`, `Button`, `Chip`, `Divider`.  
3. `Crud_popupFrom` - Popup form component for CRUD operations.  
4. Redux Hooks: `useSelector`, `useDispatch` - For accessing and dispatching Redux actions.  
5. Redux Actions: `addData`, `updateData`, `deleteData` - For CRUD operations.  
6. Icons: `MdAddChart`, `CiEdit`, `RiDeleteBin3Line` - For Add, Edit, and Delete actions.  
7. `react-toastify` - For displaying notifications.

**Component: Crud**
- **State Variables:**
  - `visibleData`: Controls the number of items displayed (initially 2).
  - `open`: Tracks whether the popup is open.
  - `currentData`: Tracks the data being edited or added.
- **Redux State:**
  - `curds`: Accesses Redux state for CRUD data.
  - `dispatch`: Dispatches actions to the Redux store.
- **Functions:**
  - `handleOpen`: Opens the popup form for adding or editing data.
  - `handleClose`: Closes the popup form and resets `currentData`.
  - `handleSave`: Handles saving new or updated data using Redux actions.
  - `handleDelete`: Deletes data by ID using a Redux action.
  - `loadMoreItems`: Increases the number of visible items by 2.
- **UI:**
  - Displays a heading "Crud Operation React With Redux".
  - Lists items as `Card` components with details like institution, logo, dates, degree, etc.
  - Shows "Edit" (`CiEdit`) and "Delete" (`RiDeleteBin3Line`) icons for each item.
  - "Load More" button to display more items.
  - Includes the `ToastContainer` for notifications.

---

### **File: crudSlice.js**  
**Imports:**  
1. `createSlice` - For creating Redux slices.

**Initial State:**
- An array of sample data with fields: `institution`, `logo`, `status`, `joiningDate`, `endDate`, `degree`, `currentSemester`, `mainSubject`.

**Slice Configuration:**
- Name: `crud`.
- Reducers:
  - `addData`: Adds a new data entry.
  - `updateData`: Updates an existing entry based on `id`.
  - `deleteData`: Deletes an entry by `id`.

**Exported:**
- Reducers: `addData`, `updateData`, `deleteData`.
- Slice reducer: `crudSlice.reducer`.

---