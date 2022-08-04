/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
        site {
          id
          siteId
          siteName
          StartDate
          EndDate
          buiderCost
          WorkPaidAmount
          isImageUploaded
          city
          state
          address
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUserDataById = /* GraphQL */ `
  query GetUserDataById(
    $userId: ID!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserDataById(
      userId: $userId
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        site {
          id
          siteId
          siteName
          StartDate
          EndDate
          buiderCost
          WorkPaidAmount
          isImageUploaded
          city
          state
          address
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const byUsername = /* GraphQL */ `
  query ByUsername(
    $username: String!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byUsername(
      username: $username
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        site {
          id
          siteId
          siteName
          StartDate
          EndDate
          buiderCost
          WorkPaidAmount
          isImageUploaded
          city
          state
          address
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getSiteImages = /* GraphQL */ `
  query GetSiteImages($id: ID!) {
    getSiteImages(id: $id) {
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
export const listSiteImages = /* GraphQL */ `
  query ListSiteImages(
    $id: ID
    $filter: ModelSiteImagesFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSiteImages(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
          city
          state
          address
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
      nextToken
    }
  }
`;
export const getSites = /* GraphQL */ `
  query GetSites($id: ID!) {
    getSites(id: $id) {
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
export const listSites = /* GraphQL */ `
  query ListSites(
    $id: ID
    $filter: ModelSitesFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSites(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
          items {
            email
            firstName
            id
            lastName
            isUserActivated
            name
            phone_number
            siteId
            userId
            username
            userType
          }
          nextToken
        }
        workers {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const bySitesId = /* GraphQL */ `
  query BySitesId(
    $siteId: ID!
    $siteName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSitesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bySitesId(
      siteId: $siteId
      siteName: $siteName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const bySiteCity = /* GraphQL */ `
  query BySiteCity(
    $city: String!
    $state: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSitesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BySiteCity(
      city: $city
      state: $state
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getSupplier = /* GraphQL */ `
  query GetSupplier($id: ID!) {
    getSupplier(id: $id) {
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
export const listSuppliers = /* GraphQL */ `
  query ListSuppliers(
    $filter: ModelSupplierFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSuppliers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const bySupplierId = /* GraphQL */ `
  query BySupplierId(
    $supplierId: ID!
    $state: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSupplierFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bySupplierId(
      supplierId: $supplierId
      state: $state
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const bySupplier = /* GraphQL */ `
  query BySupplier(
    $supplierName: String!
    $cityState: ModelSupplierBySupplierCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSupplierFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bySupplier(
      supplierName: $supplierName
      cityState: $cityState
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getMaterials = /* GraphQL */ `
  query GetMaterials($id: ID!) {
    getMaterials(id: $id) {
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
export const listMaterials = /* GraphQL */ `
  query ListMaterials(
    $filter: ModelMaterialsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMaterials(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const byMaterialId = /* GraphQL */ `
  query ByMaterialId(
    $materialId: ID!
    $nameType: ModelMaterialsByMaterialIdCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMaterialsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ByMaterialId(
      materialId: $materialId
      nameType: $nameType
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getWorkers = /* GraphQL */ `
  query GetWorkers($id: ID!) {
    getWorkers(id: $id) {
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
export const listWorkers = /* GraphQL */ `
  query ListWorkers(
    $filter: ModelWorkersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        site {
          id
          siteId
          siteName
          StartDate
          EndDate
          buiderCost
          WorkPaidAmount
          isImageUploaded
          city
          state
          address
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const byWorkerId = /* GraphQL */ `
  query ByWorkerId(
    $workerId: ID!
    $workerName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelWorkersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ByWorkerId(
      workerId: $workerId
      workerName: $workerName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        site {
          id
          siteId
          siteName
          StartDate
          EndDate
          buiderCost
          WorkPaidAmount
          isImageUploaded
          city
          state
          address
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getSuptransact = /* GraphQL */ `
  query GetSuptransact($id: ID!) {
    getSuptransact(id: $id) {
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
export const listSuptransacts = /* GraphQL */ `
  query ListSuptransacts(
    $id: ID
    $filter: ModelSuptransactFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSuptransacts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
