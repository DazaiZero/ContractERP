/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers($owner: String) {
    onCreateUsers(owner: $owner) {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers($owner: String) {
    onUpdateUsers(owner: $owner) {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers($owner: String) {
    onDeleteUsers(owner: $owner) {
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
export const onCreateSiteImages = /* GraphQL */ `
  subscription OnCreateSiteImages($owner: String) {
    onCreateSiteImages(owner: $owner) {
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
export const onUpdateSiteImages = /* GraphQL */ `
  subscription OnUpdateSiteImages($owner: String) {
    onUpdateSiteImages(owner: $owner) {
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
export const onDeleteSiteImages = /* GraphQL */ `
  subscription OnDeleteSiteImages($owner: String) {
    onDeleteSiteImages(owner: $owner) {
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
export const onCreateSites = /* GraphQL */ `
  subscription OnCreateSites($owner: String) {
    onCreateSites(owner: $owner) {
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
export const onUpdateSites = /* GraphQL */ `
  subscription OnUpdateSites($owner: String) {
    onUpdateSites(owner: $owner) {
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
export const onDeleteSites = /* GraphQL */ `
  subscription OnDeleteSites($owner: String) {
    onDeleteSites(owner: $owner) {
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
export const onCreateSupplier = /* GraphQL */ `
  subscription OnCreateSupplier($owner: String) {
    onCreateSupplier(owner: $owner) {
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
export const onUpdateSupplier = /* GraphQL */ `
  subscription OnUpdateSupplier($owner: String) {
    onUpdateSupplier(owner: $owner) {
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
export const onDeleteSupplier = /* GraphQL */ `
  subscription OnDeleteSupplier($owner: String) {
    onDeleteSupplier(owner: $owner) {
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
export const onCreateMaterials = /* GraphQL */ `
  subscription OnCreateMaterials($owner: String) {
    onCreateMaterials(owner: $owner) {
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
export const onUpdateMaterials = /* GraphQL */ `
  subscription OnUpdateMaterials($owner: String) {
    onUpdateMaterials(owner: $owner) {
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
export const onDeleteMaterials = /* GraphQL */ `
  subscription OnDeleteMaterials($owner: String) {
    onDeleteMaterials(owner: $owner) {
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
export const onCreateWorkers = /* GraphQL */ `
  subscription OnCreateWorkers($owner: String) {
    onCreateWorkers(owner: $owner) {
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
export const onUpdateWorkers = /* GraphQL */ `
  subscription OnUpdateWorkers($owner: String) {
    onUpdateWorkers(owner: $owner) {
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
export const onDeleteWorkers = /* GraphQL */ `
  subscription OnDeleteWorkers($owner: String) {
    onDeleteWorkers(owner: $owner) {
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
export const onCreateSuptransact = /* GraphQL */ `
  subscription OnCreateSuptransact($owner: String) {
    onCreateSuptransact(owner: $owner) {
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
export const onUpdateSuptransact = /* GraphQL */ `
  subscription OnUpdateSuptransact($owner: String) {
    onUpdateSuptransact(owner: $owner) {
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
export const onDeleteSuptransact = /* GraphQL */ `
  subscription OnDeleteSuptransact($owner: String) {
    onDeleteSuptransact(owner: $owner) {
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
