/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
      id
      userId
      name
      username
      passwoard
      firstName
      lastName
      email
      phone_number
      userType
      profilePic
      isUserActivated
      siteId
      site {
        id
        siteId
        siteName
        StartDate
        EndDate
        buiderCost
        WorkPaidAmount
        isImageUploaded
        siteImages {
          nextToken
        }
        city
        state
        address
        supervisors {
          nextToken
        }
        workers {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
      id
      userId
      name
      username
      passwoard
      firstName
      lastName
      email
      phone_number
      userType
      profilePic
      isUserActivated
      siteId
      site {
        id
        siteId
        siteName
        StartDate
        EndDate
        buiderCost
        WorkPaidAmount
        isImageUploaded
        siteImages {
          nextToken
        }
        city
        state
        address
        supervisors {
          nextToken
        }
        workers {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
      id
      userId
      name
      username
      passwoard
      firstName
      lastName
      email
      phone_number
      userType
      profilePic
      isUserActivated
      siteId
      site {
        id
        siteId
        siteName
        StartDate
        EndDate
        buiderCost
        WorkPaidAmount
        isImageUploaded
        siteImages {
          nextToken
        }
        city
        state
        address
        supervisors {
          nextToken
        }
        workers {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSiteImages = /* GraphQL */ `
  mutation CreateSiteImages(
    $input: CreateSiteImagesInput!
    $condition: ModelSiteImagesConditionInput
  ) {
    createSiteImages(input: $input, condition: $condition) {
      id
      siteId
      site {
        id
        siteId
        siteName
        StartDate
        EndDate
        buiderCost
        WorkPaidAmount
        isImageUploaded
        siteImages {
          nextToken
        }
        city
        state
        address
        supervisors {
          nextToken
        }
        workers {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      uri
      fileKey
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateSiteImages = /* GraphQL */ `
  mutation UpdateSiteImages(
    $input: UpdateSiteImagesInput!
    $condition: ModelSiteImagesConditionInput
  ) {
    updateSiteImages(input: $input, condition: $condition) {
      id
      siteId
      site {
        id
        siteId
        siteName
        StartDate
        EndDate
        buiderCost
        WorkPaidAmount
        isImageUploaded
        siteImages {
          nextToken
        }
        city
        state
        address
        supervisors {
          nextToken
        }
        workers {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      uri
      fileKey
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteSiteImages = /* GraphQL */ `
  mutation DeleteSiteImages(
    $input: DeleteSiteImagesInput!
    $condition: ModelSiteImagesConditionInput
  ) {
    deleteSiteImages(input: $input, condition: $condition) {
      id
      siteId
      site {
        id
        siteId
        siteName
        StartDate
        EndDate
        buiderCost
        WorkPaidAmount
        isImageUploaded
        siteImages {
          nextToken
        }
        city
        state
        address
        supervisors {
          nextToken
        }
        workers {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      uri
      fileKey
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSites = /* GraphQL */ `
  mutation CreateSites(
    $input: CreateSitesInput!
    $condition: ModelSitesConditionInput
  ) {
    createSites(input: $input, condition: $condition) {
      id
      siteId
      siteName
      StartDate
      EndDate
      buiderCost
      WorkPaidAmount
      isImageUploaded
      siteImages {
        items {
          id
          siteId
          uri
          fileKey
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      city
      state
      address
      supervisors {
        items {
          id
          userId
          name
          username
          passwoard
          firstName
          lastName
          email
          phone_number
          userType
          profilePic
          isUserActivated
          siteId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      workers {
        items {
          id
          workerId
          workerName
          workerImage
          documents
          address
          attendedDays
          paidAmount
          payableAmount
          costPerday
          addedBy
          siteId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateSites = /* GraphQL */ `
  mutation UpdateSites(
    $input: UpdateSitesInput!
    $condition: ModelSitesConditionInput
  ) {
    updateSites(input: $input, condition: $condition) {
      id
      siteId
      siteName
      StartDate
      EndDate
      buiderCost
      WorkPaidAmount
      isImageUploaded
      siteImages {
        items {
          id
          siteId
          uri
          fileKey
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      city
      state
      address
      supervisors {
        items {
          id
          userId
          name
          username
          passwoard
          firstName
          lastName
          email
          phone_number
          userType
          profilePic
          isUserActivated
          siteId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      workers {
        items {
          id
          workerId
          workerName
          workerImage
          documents
          address
          attendedDays
          paidAmount
          payableAmount
          costPerday
          addedBy
          siteId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteSites = /* GraphQL */ `
  mutation DeleteSites(
    $input: DeleteSitesInput!
    $condition: ModelSitesConditionInput
  ) {
    deleteSites(input: $input, condition: $condition) {
      id
      siteId
      siteName
      StartDate
      EndDate
      buiderCost
      WorkPaidAmount
      isImageUploaded
      siteImages {
        items {
          id
          siteId
          uri
          fileKey
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      city
      state
      address
      supervisors {
        items {
          id
          userId
          name
          username
          passwoard
          firstName
          lastName
          email
          phone_number
          userType
          profilePic
          isUserActivated
          siteId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      workers {
        items {
          id
          workerId
          workerName
          workerImage
          documents
          address
          attendedDays
          paidAmount
          payableAmount
          costPerday
          addedBy
          siteId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSupplier = /* GraphQL */ `
  mutation CreateSupplier(
    $input: CreateSupplierInput!
    $condition: ModelSupplierConditionInput
  ) {
    createSupplier(input: $input, condition: $condition) {
      id
      supplierId
      supplierName
      supplierBussiness
      supplierGST
      contact
      address
      city
      state
      materials {
        items {
          id
          materialId
          Name
          type
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateSupplier = /* GraphQL */ `
  mutation UpdateSupplier(
    $input: UpdateSupplierInput!
    $condition: ModelSupplierConditionInput
  ) {
    updateSupplier(input: $input, condition: $condition) {
      id
      supplierId
      supplierName
      supplierBussiness
      supplierGST
      contact
      address
      city
      state
      materials {
        items {
          id
          materialId
          Name
          type
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteSupplier = /* GraphQL */ `
  mutation DeleteSupplier(
    $input: DeleteSupplierInput!
    $condition: ModelSupplierConditionInput
  ) {
    deleteSupplier(input: $input, condition: $condition) {
      id
      supplierId
      supplierName
      supplierBussiness
      supplierGST
      contact
      address
      city
      state
      materials {
        items {
          id
          materialId
          Name
          type
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createMaterials = /* GraphQL */ `
  mutation CreateMaterials(
    $input: CreateMaterialsInput!
    $condition: ModelMaterialsConditionInput
  ) {
    createMaterials(input: $input, condition: $condition) {
      id
      materialId
      Name
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateMaterials = /* GraphQL */ `
  mutation UpdateMaterials(
    $input: UpdateMaterialsInput!
    $condition: ModelMaterialsConditionInput
  ) {
    updateMaterials(input: $input, condition: $condition) {
      id
      materialId
      Name
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteMaterials = /* GraphQL */ `
  mutation DeleteMaterials(
    $input: DeleteMaterialsInput!
    $condition: ModelMaterialsConditionInput
  ) {
    deleteMaterials(input: $input, condition: $condition) {
      id
      materialId
      Name
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createWorkers = /* GraphQL */ `
  mutation CreateWorkers(
    $input: CreateWorkersInput!
    $condition: ModelWorkersConditionInput
  ) {
    createWorkers(input: $input, condition: $condition) {
      id
      workerId
      workerName
      workerImage
      documents
      address
      attendedDays
      paidAmount
      payableAmount
      costPerday
      addedBy
      siteId
      site {
        id
        siteId
        siteName
        StartDate
        EndDate
        buiderCost
        WorkPaidAmount
        isImageUploaded
        siteImages {
          nextToken
        }
        city
        state
        address
        supervisors {
          nextToken
        }
        workers {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateWorkers = /* GraphQL */ `
  mutation UpdateWorkers(
    $input: UpdateWorkersInput!
    $condition: ModelWorkersConditionInput
  ) {
    updateWorkers(input: $input, condition: $condition) {
      id
      workerId
      workerName
      workerImage
      documents
      address
      attendedDays
      paidAmount
      payableAmount
      costPerday
      addedBy
      siteId
      site {
        id
        siteId
        siteName
        StartDate
        EndDate
        buiderCost
        WorkPaidAmount
        isImageUploaded
        siteImages {
          nextToken
        }
        city
        state
        address
        supervisors {
          nextToken
        }
        workers {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteWorkers = /* GraphQL */ `
  mutation DeleteWorkers(
    $input: DeleteWorkersInput!
    $condition: ModelWorkersConditionInput
  ) {
    deleteWorkers(input: $input, condition: $condition) {
      id
      workerId
      workerName
      workerImage
      documents
      address
      attendedDays
      paidAmount
      payableAmount
      costPerday
      addedBy
      siteId
      site {
        id
        siteId
        siteName
        StartDate
        EndDate
        buiderCost
        WorkPaidAmount
        isImageUploaded
        siteImages {
          nextToken
        }
        city
        state
        address
        supervisors {
          nextToken
        }
        workers {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSuptransact = /* GraphQL */ `
  mutation CreateSuptransact(
    $input: CreateSuptransactInput!
    $condition: ModelSuptransactConditionInput
  ) {
    createSuptransact(input: $input, condition: $condition) {
      id
      transactionType
      transactionAmount
      transactionDate
      transactionWith
      transactionBy
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateSuptransact = /* GraphQL */ `
  mutation UpdateSuptransact(
    $input: UpdateSuptransactInput!
    $condition: ModelSuptransactConditionInput
  ) {
    updateSuptransact(input: $input, condition: $condition) {
      id
      transactionType
      transactionAmount
      transactionDate
      transactionWith
      transactionBy
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteSuptransact = /* GraphQL */ `
  mutation DeleteSuptransact(
    $input: DeleteSuptransactInput!
    $condition: ModelSuptransactConditionInput
  ) {
    deleteSuptransact(input: $input, condition: $condition) {
      id
      transactionType
      transactionAmount
      transactionDate
      transactionWith
      transactionBy
      createdAt
      updatedAt
      owner
    }
  }
`;
