/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  DateTime: any
  Hex: any
  Json: any
  Long: any
  RGBAHue: any
  RGBATransparency: any
  RichTextAST: any
}

export type Aggregate = {
  __typename?: 'Aggregate'
  count: Scalars['Int']
}

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Asset>
  featuredImagePost: Array<Post>
  /** The file name */
  fileName: Scalars['String']
  /** The file handle */
  handle: Scalars['String']
  /** The height of the file */
  height?: Maybe<Scalars['Float']>
  /** List of Asset versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  imageCoverEvent: Array<Event>
  imageCoverPastEvent: Array<PastEvent>
  imagesEventPastEvent: Array<PastEvent>
  /** System Locale field */
  locale: Locale
  /** Get the other localizations for this document */
  localizations: Array<Asset>
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>
  photoAuthor: Array<Author>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** The file size */
  size?: Maybe<Scalars['Float']>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']
  /** The file width */
  width?: Maybe<Scalars['Float']>
}

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

/** Asset system model */
export type AssetFeaturedImagePostArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<PostOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PostWhereInput>
}

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

/** Asset system model */
export type AssetImageCoverEventArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<EventOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<EventWhereInput>
}

/** Asset system model */
export type AssetImageCoverPastEventArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<PastEventOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PastEventWhereInput>
}

/** Asset system model */
export type AssetImagesEventPastEventArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<PastEventOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PastEventWhereInput>
}

/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']
  locales?: Array<Locale>
}

/** Asset system model */
export type AssetPhotoAuthorArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<AuthorOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AuthorWhereInput>
}

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>
}

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: AssetWhereUniqueInput
}

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<AssetEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  featuredImagePost?: InputMaybe<PostCreateManyInlineInput>
  fileName: Scalars['String']
  handle: Scalars['String']
  height?: InputMaybe<Scalars['Float']>
  imageCoverEvent?: InputMaybe<EventCreateManyInlineInput>
  imageCoverPastEvent?: InputMaybe<PastEventCreateManyInlineInput>
  imagesEventPastEvent?: InputMaybe<PastEventCreateManyInlineInput>
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>
  mimeType?: InputMaybe<Scalars['String']>
  photoAuthor?: InputMaybe<AuthorCreateManyInlineInput>
  size?: InputMaybe<Scalars['Float']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  fileName: Scalars['String']
  handle: Scalars['String']
  height?: InputMaybe<Scalars['Float']>
  mimeType?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Float']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput
  locale: Locale
}

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>
}

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>
}

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>
}

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Asset
}

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<AssetWhereStageInput>
  documentInStages_none?: InputMaybe<AssetWhereStageInput>
  documentInStages_some?: InputMaybe<AssetWhereStageInput>
  featuredImagePost_every?: InputMaybe<PostWhereInput>
  featuredImagePost_none?: InputMaybe<PostWhereInput>
  featuredImagePost_some?: InputMaybe<PostWhereInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  imageCoverEvent_every?: InputMaybe<EventWhereInput>
  imageCoverEvent_none?: InputMaybe<EventWhereInput>
  imageCoverEvent_some?: InputMaybe<EventWhereInput>
  imageCoverPastEvent_every?: InputMaybe<PastEventWhereInput>
  imageCoverPastEvent_none?: InputMaybe<PastEventWhereInput>
  imageCoverPastEvent_some?: InputMaybe<PastEventWhereInput>
  imagesEventPastEvent_every?: InputMaybe<PastEventWhereInput>
  imagesEventPastEvent_none?: InputMaybe<PastEventWhereInput>
  imagesEventPastEvent_some?: InputMaybe<PastEventWhereInput>
  photoAuthor_every?: InputMaybe<AuthorWhereInput>
  photoAuthor_none?: InputMaybe<AuthorWhereInput>
  photoAuthor_some?: InputMaybe<AuthorWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>
  image?: InputMaybe<ImageTransformationInput>
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>
}

export type AssetUpdateInput = {
  featuredImagePost?: InputMaybe<PostUpdateManyInlineInput>
  fileName?: InputMaybe<Scalars['String']>
  handle?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Float']>
  imageCoverEvent?: InputMaybe<EventUpdateManyInlineInput>
  imageCoverPastEvent?: InputMaybe<PastEventUpdateManyInlineInput>
  imagesEventPastEvent?: InputMaybe<PastEventUpdateManyInlineInput>
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>
  mimeType?: InputMaybe<Scalars['String']>
  photoAuthor?: InputMaybe<AuthorUpdateManyInlineInput>
  size?: InputMaybe<Scalars['Float']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>
  handle?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Float']>
  mimeType?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Float']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput
  locale: Locale
}

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>
}

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>
}

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Float']>
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>
  mimeType?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Float']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Float']>
  mimeType?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Float']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput
  locale: Locale
}

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>
}

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput
  /** Document search */
  where: AssetWhereInput
}

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>
}

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput
  /** Update document if it exists */
  update: AssetUpdateInput
}

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput
  locale: Locale
  update: AssetUpdateLocalizationDataInput
}

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<AssetWhereStageInput>
  documentInStages_none?: InputMaybe<AssetWhereStageInput>
  documentInStages_some?: InputMaybe<AssetWhereStageInput>
  featuredImagePost_every?: InputMaybe<PostWhereInput>
  featuredImagePost_none?: InputMaybe<PostWhereInput>
  featuredImagePost_some?: InputMaybe<PostWhereInput>
  fileName?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>
  handle?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Float']>
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  imageCoverEvent_every?: InputMaybe<EventWhereInput>
  imageCoverEvent_none?: InputMaybe<EventWhereInput>
  imageCoverEvent_some?: InputMaybe<EventWhereInput>
  imageCoverPastEvent_every?: InputMaybe<PastEventWhereInput>
  imageCoverPastEvent_none?: InputMaybe<PastEventWhereInput>
  imageCoverPastEvent_some?: InputMaybe<PastEventWhereInput>
  imagesEventPastEvent_every?: InputMaybe<PastEventWhereInput>
  imagesEventPastEvent_none?: InputMaybe<PastEventWhereInput>
  imagesEventPastEvent_some?: InputMaybe<PastEventWhereInput>
  mimeType?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>
  photoAuthor_every?: InputMaybe<AuthorWhereInput>
  photoAuthor_none?: InputMaybe<AuthorWhereInput>
  photoAuthor_some?: InputMaybe<AuthorWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  size?: InputMaybe<Scalars['Float']>
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  width?: InputMaybe<Scalars['Float']>
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type Author = Node & {
  __typename?: 'Author'
  bio?: Maybe<Scalars['String']>
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Author>
  /** List of Author versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  name: Scalars['String']
  photo: Asset
  posts: Array<Post>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type AuthorCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type AuthorDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type AuthorHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type AuthorPhotoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type AuthorPostsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<PostOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PostWhereInput>
}

export type AuthorPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type AuthorScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type AuthorUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type AuthorConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: AuthorWhereUniqueInput
}

/** A connection to a list of items. */
export type AuthorConnection = {
  __typename?: 'AuthorConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<AuthorEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type AuthorCreateInput = {
  bio?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  name: Scalars['String']
  photo: AssetCreateOneInlineInput
  posts?: InputMaybe<PostCreateManyInlineInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type AuthorCreateManyInlineInput = {
  /** Connect multiple existing Author documents */
  connect?: InputMaybe<Array<AuthorWhereUniqueInput>>
  /** Create and connect multiple existing Author documents */
  create?: InputMaybe<Array<AuthorCreateInput>>
}

export type AuthorCreateOneInlineInput = {
  /** Connect one existing Author document */
  connect?: InputMaybe<AuthorWhereUniqueInput>
  /** Create and connect one Author document */
  create?: InputMaybe<AuthorCreateInput>
}

/** An edge in a connection. */
export type AuthorEdge = {
  __typename?: 'AuthorEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Author
}

/** Identifies documents */
export type AuthorManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AuthorWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AuthorWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AuthorWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  bio?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  bio_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  bio_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  bio_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  bio_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  bio_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  bio_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  bio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  bio_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  bio_starts_with?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<AuthorWhereStageInput>
  documentInStages_none?: InputMaybe<AuthorWhereStageInput>
  documentInStages_some?: InputMaybe<AuthorWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  photo?: InputMaybe<AssetWhereInput>
  posts_every?: InputMaybe<PostWhereInput>
  posts_none?: InputMaybe<PostWhereInput>
  posts_some?: InputMaybe<PostWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum AuthorOrderByInput {
  BioAsc = 'bio_ASC',
  BioDesc = 'bio_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type AuthorUpdateInput = {
  bio?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  photo?: InputMaybe<AssetUpdateOneInlineInput>
  posts?: InputMaybe<PostUpdateManyInlineInput>
}

export type AuthorUpdateManyInlineInput = {
  /** Connect multiple existing Author documents */
  connect?: InputMaybe<Array<AuthorConnectInput>>
  /** Create and connect multiple Author documents */
  create?: InputMaybe<Array<AuthorCreateInput>>
  /** Delete multiple Author documents */
  delete?: InputMaybe<Array<AuthorWhereUniqueInput>>
  /** Disconnect multiple Author documents */
  disconnect?: InputMaybe<Array<AuthorWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Author documents */
  set?: InputMaybe<Array<AuthorWhereUniqueInput>>
  /** Update multiple Author documents */
  update?: InputMaybe<Array<AuthorUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Author documents */
  upsert?: InputMaybe<Array<AuthorUpsertWithNestedWhereUniqueInput>>
}

export type AuthorUpdateManyInput = {
  bio?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

export type AuthorUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AuthorUpdateManyInput
  /** Document search */
  where: AuthorWhereInput
}

export type AuthorUpdateOneInlineInput = {
  /** Connect existing Author document */
  connect?: InputMaybe<AuthorWhereUniqueInput>
  /** Create and connect one Author document */
  create?: InputMaybe<AuthorCreateInput>
  /** Delete currently connected Author document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Author document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Author document */
  update?: InputMaybe<AuthorUpdateWithNestedWhereUniqueInput>
  /** Upsert single Author document */
  upsert?: InputMaybe<AuthorUpsertWithNestedWhereUniqueInput>
}

export type AuthorUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AuthorUpdateInput
  /** Unique document search */
  where: AuthorWhereUniqueInput
}

export type AuthorUpsertInput = {
  /** Create document if it didn't exist */
  create: AuthorCreateInput
  /** Update document if it exists */
  update: AuthorUpdateInput
}

export type AuthorUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AuthorUpsertInput
  /** Unique document search */
  where: AuthorWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type AuthorWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type AuthorWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AuthorWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AuthorWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AuthorWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  bio?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  bio_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  bio_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  bio_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  bio_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  bio_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  bio_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  bio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  bio_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  bio_starts_with?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<AuthorWhereStageInput>
  documentInStages_none?: InputMaybe<AuthorWhereStageInput>
  documentInStages_some?: InputMaybe<AuthorWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  photo?: InputMaybe<AssetWhereInput>
  posts_every?: InputMaybe<PostWhereInput>
  posts_none?: InputMaybe<PostWhereInput>
  posts_some?: InputMaybe<PostWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AuthorWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AuthorWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AuthorWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AuthorWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AuthorWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Author record uniquely */
export type AuthorWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type BatchPayload = {
  __typename?: 'BatchPayload'
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']
}

export type Category = Node & {
  __typename?: 'Category'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Category>
  /** List of Category versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  name: Scalars['String']
  posts: Array<Post>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  slug: Scalars['String']
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type CategoryCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type CategoryDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type CategoryHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type CategoryPostsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<PostOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PostWhereInput>
}

export type CategoryPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type CategoryScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type CategoryUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type CategoryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: CategoryWhereUniqueInput
}

/** A connection to a list of items. */
export type CategoryConnection = {
  __typename?: 'CategoryConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<CategoryEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type CategoryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  name: Scalars['String']
  posts?: InputMaybe<PostCreateManyInlineInput>
  slug: Scalars['String']
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type CategoryCreateManyInlineInput = {
  /** Connect multiple existing Category documents */
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>
  /** Create and connect multiple existing Category documents */
  create?: InputMaybe<Array<CategoryCreateInput>>
}

export type CategoryCreateOneInlineInput = {
  /** Connect one existing Category document */
  connect?: InputMaybe<CategoryWhereUniqueInput>
  /** Create and connect one Category document */
  create?: InputMaybe<CategoryCreateInput>
}

/** An edge in a connection. */
export type CategoryEdge = {
  __typename?: 'CategoryEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Category
}

/** Identifies documents */
export type CategoryManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<CategoryWhereStageInput>
  documentInStages_none?: InputMaybe<CategoryWhereStageInput>
  documentInStages_some?: InputMaybe<CategoryWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  posts_every?: InputMaybe<PostWhereInput>
  posts_none?: InputMaybe<PostWhereInput>
  posts_some?: InputMaybe<PostWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  slug?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum CategoryOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type CategoryUpdateInput = {
  name?: InputMaybe<Scalars['String']>
  posts?: InputMaybe<PostUpdateManyInlineInput>
  slug?: InputMaybe<Scalars['String']>
}

export type CategoryUpdateManyInlineInput = {
  /** Connect multiple existing Category documents */
  connect?: InputMaybe<Array<CategoryConnectInput>>
  /** Create and connect multiple Category documents */
  create?: InputMaybe<Array<CategoryCreateInput>>
  /** Delete multiple Category documents */
  delete?: InputMaybe<Array<CategoryWhereUniqueInput>>
  /** Disconnect multiple Category documents */
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Category documents */
  set?: InputMaybe<Array<CategoryWhereUniqueInput>>
  /** Update multiple Category documents */
  update?: InputMaybe<Array<CategoryUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Category documents */
  upsert?: InputMaybe<Array<CategoryUpsertWithNestedWhereUniqueInput>>
}

export type CategoryUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>
}

export type CategoryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CategoryUpdateManyInput
  /** Document search */
  where: CategoryWhereInput
}

export type CategoryUpdateOneInlineInput = {
  /** Connect existing Category document */
  connect?: InputMaybe<CategoryWhereUniqueInput>
  /** Create and connect one Category document */
  create?: InputMaybe<CategoryCreateInput>
  /** Delete currently connected Category document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Category document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Category document */
  update?: InputMaybe<CategoryUpdateWithNestedWhereUniqueInput>
  /** Upsert single Category document */
  upsert?: InputMaybe<CategoryUpsertWithNestedWhereUniqueInput>
}

export type CategoryUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CategoryUpdateInput
  /** Unique document search */
  where: CategoryWhereUniqueInput
}

export type CategoryUpsertInput = {
  /** Create document if it didn't exist */
  create: CategoryCreateInput
  /** Update document if it exists */
  update: CategoryUpdateInput
}

export type CategoryUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CategoryUpsertInput
  /** Unique document search */
  where: CategoryWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type CategoryWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type CategoryWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<CategoryWhereStageInput>
  documentInStages_none?: InputMaybe<CategoryWhereStageInput>
  documentInStages_some?: InputMaybe<CategoryWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  posts_every?: InputMaybe<PostWhereInput>
  posts_none?: InputMaybe<PostWhereInput>
  posts_some?: InputMaybe<PostWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  slug?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CategoryWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CategoryWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Category record uniquely */
export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  slug?: InputMaybe<Scalars['String']>
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color'
  css: Scalars['String']
  hex: Scalars['Hex']
  rgba: Rgba
}

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>
  rgba?: InputMaybe<RgbaInput>
}

export type Comment = Node & {
  __typename?: 'Comment'
  comment: Scalars['String']
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Comment>
  email: Scalars['String']
  /** List of Comment versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  name: Scalars['String']
  post?: Maybe<Post>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type CommentCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type CommentDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type CommentHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type CommentPostArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type CommentPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type CommentScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type CommentUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type CommentConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: CommentWhereUniqueInput
}

/** A connection to a list of items. */
export type CommentConnection = {
  __typename?: 'CommentConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<CommentEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type CommentCreateInput = {
  comment: Scalars['String']
  createdAt?: InputMaybe<Scalars['DateTime']>
  email: Scalars['String']
  name: Scalars['String']
  post?: InputMaybe<PostCreateOneInlineInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type CommentCreateManyInlineInput = {
  /** Connect multiple existing Comment documents */
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>
  /** Create and connect multiple existing Comment documents */
  create?: InputMaybe<Array<CommentCreateInput>>
}

export type CommentCreateOneInlineInput = {
  /** Connect one existing Comment document */
  connect?: InputMaybe<CommentWhereUniqueInput>
  /** Create and connect one Comment document */
  create?: InputMaybe<CommentCreateInput>
}

/** An edge in a connection. */
export type CommentEdge = {
  __typename?: 'CommentEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Comment
}

/** Identifies documents */
export type CommentManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CommentWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CommentWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CommentWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  comment?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  comment_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  comment_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  comment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  comment_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  comment_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  comment_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  comment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  comment_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  comment_starts_with?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<CommentWhereStageInput>
  documentInStages_none?: InputMaybe<CommentWhereStageInput>
  documentInStages_some?: InputMaybe<CommentWhereStageInput>
  email?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  post?: InputMaybe<PostWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum CommentOrderByInput {
  CommentAsc = 'comment_ASC',
  CommentDesc = 'comment_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type CommentUpdateInput = {
  comment?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  post?: InputMaybe<PostUpdateOneInlineInput>
}

export type CommentUpdateManyInlineInput = {
  /** Connect multiple existing Comment documents */
  connect?: InputMaybe<Array<CommentConnectInput>>
  /** Create and connect multiple Comment documents */
  create?: InputMaybe<Array<CommentCreateInput>>
  /** Delete multiple Comment documents */
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>
  /** Disconnect multiple Comment documents */
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Comment documents */
  set?: InputMaybe<Array<CommentWhereUniqueInput>>
  /** Update multiple Comment documents */
  update?: InputMaybe<Array<CommentUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Comment documents */
  upsert?: InputMaybe<Array<CommentUpsertWithNestedWhereUniqueInput>>
}

export type CommentUpdateManyInput = {
  comment?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

export type CommentUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CommentUpdateManyInput
  /** Document search */
  where: CommentWhereInput
}

export type CommentUpdateOneInlineInput = {
  /** Connect existing Comment document */
  connect?: InputMaybe<CommentWhereUniqueInput>
  /** Create and connect one Comment document */
  create?: InputMaybe<CommentCreateInput>
  /** Delete currently connected Comment document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Comment document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Comment document */
  update?: InputMaybe<CommentUpdateWithNestedWhereUniqueInput>
  /** Upsert single Comment document */
  upsert?: InputMaybe<CommentUpsertWithNestedWhereUniqueInput>
}

export type CommentUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CommentUpdateInput
  /** Unique document search */
  where: CommentWhereUniqueInput
}

export type CommentUpsertInput = {
  /** Create document if it didn't exist */
  create: CommentCreateInput
  /** Update document if it exists */
  update: CommentUpdateInput
}

export type CommentUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CommentUpsertInput
  /** Unique document search */
  where: CommentWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type CommentWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type CommentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CommentWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CommentWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CommentWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  comment?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  comment_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  comment_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  comment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  comment_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  comment_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  comment_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  comment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  comment_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  comment_starts_with?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<CommentWhereStageInput>
  documentInStages_none?: InputMaybe<CommentWhereStageInput>
  documentInStages_some?: InputMaybe<CommentWhereStageInput>
  email?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  post?: InputMaybe<PostWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CommentWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CommentWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CommentWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CommentWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CommentWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Comment record uniquely */
export type CommentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>
}

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx',
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>
}

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>
}

export type DocumentVersion = {
  __typename?: 'DocumentVersion'
  createdAt: Scalars['DateTime']
  data?: Maybe<Scalars['Json']>
  id: Scalars['ID']
  revision: Scalars['Int']
  stage: Stage
}

export type Event = Node & {
  __typename?: 'Event'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  date: Scalars['String']
  description?: Maybe<Scalars['String']>
  /** Get the document in other stages */
  documentInStages: Array<Event>
  /** List of Event versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  imageCover: Asset
  local: Scalars['String']
  name: Scalars['String']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type EventCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type EventDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type EventHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type EventImageCoverArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type EventPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type EventScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type EventUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type EventConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: EventWhereUniqueInput
}

/** A connection to a list of items. */
export type EventConnection = {
  __typename?: 'EventConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<EventEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type EventCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  date: Scalars['String']
  description?: InputMaybe<Scalars['String']>
  imageCover: AssetCreateOneInlineInput
  local: Scalars['String']
  name: Scalars['String']
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type EventCreateManyInlineInput = {
  /** Connect multiple existing Event documents */
  connect?: InputMaybe<Array<EventWhereUniqueInput>>
  /** Create and connect multiple existing Event documents */
  create?: InputMaybe<Array<EventCreateInput>>
}

export type EventCreateOneInlineInput = {
  /** Connect one existing Event document */
  connect?: InputMaybe<EventWhereUniqueInput>
  /** Create and connect one Event document */
  create?: InputMaybe<EventCreateInput>
}

/** An edge in a connection. */
export type EventEdge = {
  __typename?: 'EventEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Event
}

/** Identifies documents */
export type EventManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EventWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EventWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EventWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  date?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  date_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  date_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  date_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  date_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  date_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  date_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  date_starts_with?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  documentInStages_every?: InputMaybe<EventWhereStageInput>
  documentInStages_none?: InputMaybe<EventWhereStageInput>
  documentInStages_some?: InputMaybe<EventWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  imageCover?: InputMaybe<AssetWhereInput>
  local?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  local_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  local_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  local_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  local_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  local_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  local_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  local_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  local_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  local_starts_with?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum EventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LocalAsc = 'local_ASC',
  LocalDesc = 'local_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type EventUpdateInput = {
  date?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  imageCover?: InputMaybe<AssetUpdateOneInlineInput>
  local?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

export type EventUpdateManyInlineInput = {
  /** Connect multiple existing Event documents */
  connect?: InputMaybe<Array<EventConnectInput>>
  /** Create and connect multiple Event documents */
  create?: InputMaybe<Array<EventCreateInput>>
  /** Delete multiple Event documents */
  delete?: InputMaybe<Array<EventWhereUniqueInput>>
  /** Disconnect multiple Event documents */
  disconnect?: InputMaybe<Array<EventWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Event documents */
  set?: InputMaybe<Array<EventWhereUniqueInput>>
  /** Update multiple Event documents */
  update?: InputMaybe<Array<EventUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Event documents */
  upsert?: InputMaybe<Array<EventUpsertWithNestedWhereUniqueInput>>
}

export type EventUpdateManyInput = {
  date?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  local?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

export type EventUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: EventUpdateManyInput
  /** Document search */
  where: EventWhereInput
}

export type EventUpdateOneInlineInput = {
  /** Connect existing Event document */
  connect?: InputMaybe<EventWhereUniqueInput>
  /** Create and connect one Event document */
  create?: InputMaybe<EventCreateInput>
  /** Delete currently connected Event document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Event document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Event document */
  update?: InputMaybe<EventUpdateWithNestedWhereUniqueInput>
  /** Upsert single Event document */
  upsert?: InputMaybe<EventUpsertWithNestedWhereUniqueInput>
}

export type EventUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: EventUpdateInput
  /** Unique document search */
  where: EventWhereUniqueInput
}

export type EventUpsertInput = {
  /** Create document if it didn't exist */
  create: EventCreateInput
  /** Update document if it exists */
  update: EventUpdateInput
}

export type EventUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: EventUpsertInput
  /** Unique document search */
  where: EventWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type EventWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type EventWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EventWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EventWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EventWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  date?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  date_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  date_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  date_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  date_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  date_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  date_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  date_starts_with?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  documentInStages_every?: InputMaybe<EventWhereStageInput>
  documentInStages_none?: InputMaybe<EventWhereStageInput>
  documentInStages_some?: InputMaybe<EventWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  imageCover?: InputMaybe<AssetWhereInput>
  local?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  local_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  local_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  local_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  local_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  local_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  local_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  local_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  local_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  local_starts_with?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type EventWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EventWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EventWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EventWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<EventWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Event record uniquely */
export type EventWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>
}

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>
}

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location'
  distance: Scalars['Float']
  latitude: Scalars['Float']
  longitude: Scalars['Float']
}

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput
}

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']
  longitude: Scalars['Float']
}

export type Mutation = {
  __typename?: 'Mutation'
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>
  /** Create one author */
  createAuthor?: Maybe<Author>
  /** Create one category */
  createCategory?: Maybe<Category>
  /** Create one comment */
  createComment?: Maybe<Comment>
  /** Create one event */
  createEvent?: Maybe<Event>
  /** Create one pastEvent */
  createPastEvent?: Maybe<PastEvent>
  /** Create one post */
  createPost?: Maybe<Post>
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>
  /** Create one workWithUs */
  createWorkWithUs?: Maybe<WorkWithUs>
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>
  /** Delete one author from _all_ existing stages. Returns deleted document. */
  deleteAuthor?: Maybe<Author>
  /** Delete one category from _all_ existing stages. Returns deleted document. */
  deleteCategory?: Maybe<Category>
  /** Delete one comment from _all_ existing stages. Returns deleted document. */
  deleteComment?: Maybe<Comment>
  /** Delete one event from _all_ existing stages. Returns deleted document. */
  deleteEvent?: Maybe<Event>
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection
  /**
   * Delete many Author documents
   * @deprecated Please use the new paginated many mutation (deleteManyAuthorsConnection)
   */
  deleteManyAuthors: BatchPayload
  /** Delete many Author documents, return deleted documents */
  deleteManyAuthorsConnection: AuthorConnection
  /**
   * Delete many Category documents
   * @deprecated Please use the new paginated many mutation (deleteManyCategoriesConnection)
   */
  deleteManyCategories: BatchPayload
  /** Delete many Category documents, return deleted documents */
  deleteManyCategoriesConnection: CategoryConnection
  /**
   * Delete many Comment documents
   * @deprecated Please use the new paginated many mutation (deleteManyCommentsConnection)
   */
  deleteManyComments: BatchPayload
  /** Delete many Comment documents, return deleted documents */
  deleteManyCommentsConnection: CommentConnection
  /**
   * Delete many Event documents
   * @deprecated Please use the new paginated many mutation (deleteManyEventsConnection)
   */
  deleteManyEvents: BatchPayload
  /** Delete many Event documents, return deleted documents */
  deleteManyEventsConnection: EventConnection
  /**
   * Delete many PastEvent documents
   * @deprecated Please use the new paginated many mutation (deleteManyPastEventsConnection)
   */
  deleteManyPastEvents: BatchPayload
  /** Delete many PastEvent documents, return deleted documents */
  deleteManyPastEventsConnection: PastEventConnection
  /**
   * Delete many Post documents
   * @deprecated Please use the new paginated many mutation (deleteManyPostsConnection)
   */
  deleteManyPosts: BatchPayload
  /** Delete many Post documents, return deleted documents */
  deleteManyPostsConnection: PostConnection
  /**
   * Delete many WorkWithUs documents
   * @deprecated Please use the new paginated many mutation (deleteManyWorkWithusesConnection)
   */
  deleteManyWorkWithuses: BatchPayload
  /** Delete many WorkWithUs documents, return deleted documents */
  deleteManyWorkWithusesConnection: WorkWithUsConnection
  /** Delete one pastEvent from _all_ existing stages. Returns deleted document. */
  deletePastEvent?: Maybe<PastEvent>
  /** Delete one post from _all_ existing stages. Returns deleted document. */
  deletePost?: Maybe<Post>
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>
  /** Delete one workWithUs from _all_ existing stages. Returns deleted document. */
  deleteWorkWithUs?: Maybe<WorkWithUs>
  /** Publish one asset */
  publishAsset?: Maybe<Asset>
  /** Publish one author */
  publishAuthor?: Maybe<Author>
  /** Publish one category */
  publishCategory?: Maybe<Category>
  /** Publish one comment */
  publishComment?: Maybe<Comment>
  /** Publish one event */
  publishEvent?: Maybe<Event>
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection
  /**
   * Publish many Author documents
   * @deprecated Please use the new paginated many mutation (publishManyAuthorsConnection)
   */
  publishManyAuthors: BatchPayload
  /** Publish many Author documents */
  publishManyAuthorsConnection: AuthorConnection
  /**
   * Publish many Category documents
   * @deprecated Please use the new paginated many mutation (publishManyCategoriesConnection)
   */
  publishManyCategories: BatchPayload
  /** Publish many Category documents */
  publishManyCategoriesConnection: CategoryConnection
  /**
   * Publish many Comment documents
   * @deprecated Please use the new paginated many mutation (publishManyCommentsConnection)
   */
  publishManyComments: BatchPayload
  /** Publish many Comment documents */
  publishManyCommentsConnection: CommentConnection
  /**
   * Publish many Event documents
   * @deprecated Please use the new paginated many mutation (publishManyEventsConnection)
   */
  publishManyEvents: BatchPayload
  /** Publish many Event documents */
  publishManyEventsConnection: EventConnection
  /**
   * Publish many PastEvent documents
   * @deprecated Please use the new paginated many mutation (publishManyPastEventsConnection)
   */
  publishManyPastEvents: BatchPayload
  /** Publish many PastEvent documents */
  publishManyPastEventsConnection: PastEventConnection
  /**
   * Publish many Post documents
   * @deprecated Please use the new paginated many mutation (publishManyPostsConnection)
   */
  publishManyPosts: BatchPayload
  /** Publish many Post documents */
  publishManyPostsConnection: PostConnection
  /**
   * Publish many WorkWithUs documents
   * @deprecated Please use the new paginated many mutation (publishManyWorkWithusesConnection)
   */
  publishManyWorkWithuses: BatchPayload
  /** Publish many WorkWithUs documents */
  publishManyWorkWithusesConnection: WorkWithUsConnection
  /** Publish one pastEvent */
  publishPastEvent?: Maybe<PastEvent>
  /** Publish one post */
  publishPost?: Maybe<Post>
  /** Publish one workWithUs */
  publishWorkWithUs?: Maybe<WorkWithUs>
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>
  /** Schedule to publish one author */
  schedulePublishAuthor?: Maybe<Author>
  /** Schedule to publish one category */
  schedulePublishCategory?: Maybe<Category>
  /** Schedule to publish one comment */
  schedulePublishComment?: Maybe<Comment>
  /** Schedule to publish one event */
  schedulePublishEvent?: Maybe<Event>
  /** Schedule to publish one pastEvent */
  schedulePublishPastEvent?: Maybe<PastEvent>
  /** Schedule to publish one post */
  schedulePublishPost?: Maybe<Post>
  /** Schedule to publish one workWithUs */
  schedulePublishWorkWithUs?: Maybe<WorkWithUs>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>
  /** Unpublish one author from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAuthor?: Maybe<Author>
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCategory?: Maybe<Category>
  /** Unpublish one comment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishComment?: Maybe<Comment>
  /** Unpublish one event from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishEvent?: Maybe<Event>
  /** Unpublish one pastEvent from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPastEvent?: Maybe<PastEvent>
  /** Unpublish one post from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPost?: Maybe<Post>
  /** Unpublish one workWithUs from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishWorkWithUs?: Maybe<WorkWithUs>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>
  /** Unpublish one author from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAuthor?: Maybe<Author>
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCategory?: Maybe<Category>
  /** Unpublish one comment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishComment?: Maybe<Comment>
  /** Unpublish one event from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishEvent?: Maybe<Event>
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection
  /**
   * Unpublish many Author documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAuthorsConnection)
   */
  unpublishManyAuthors: BatchPayload
  /** Find many Author documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAuthorsConnection: AuthorConnection
  /**
   * Unpublish many Category documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCategoriesConnection)
   */
  unpublishManyCategories: BatchPayload
  /** Find many Category documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCategoriesConnection: CategoryConnection
  /**
   * Unpublish many Comment documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCommentsConnection)
   */
  unpublishManyComments: BatchPayload
  /** Find many Comment documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCommentsConnection: CommentConnection
  /**
   * Unpublish many Event documents
   * @deprecated Please use the new paginated many mutation (unpublishManyEventsConnection)
   */
  unpublishManyEvents: BatchPayload
  /** Find many Event documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyEventsConnection: EventConnection
  /**
   * Unpublish many PastEvent documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPastEventsConnection)
   */
  unpublishManyPastEvents: BatchPayload
  /** Find many PastEvent documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPastEventsConnection: PastEventConnection
  /**
   * Unpublish many Post documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPostsConnection)
   */
  unpublishManyPosts: BatchPayload
  /** Find many Post documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPostsConnection: PostConnection
  /**
   * Unpublish many WorkWithUs documents
   * @deprecated Please use the new paginated many mutation (unpublishManyWorkWithusesConnection)
   */
  unpublishManyWorkWithuses: BatchPayload
  /** Find many WorkWithUs documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyWorkWithusesConnection: WorkWithUsConnection
  /** Unpublish one pastEvent from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPastEvent?: Maybe<PastEvent>
  /** Unpublish one post from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPost?: Maybe<Post>
  /** Unpublish one workWithUs from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishWorkWithUs?: Maybe<WorkWithUs>
  /** Update one asset */
  updateAsset?: Maybe<Asset>
  /** Update one author */
  updateAuthor?: Maybe<Author>
  /** Update one category */
  updateCategory?: Maybe<Category>
  /** Update one comment */
  updateComment?: Maybe<Comment>
  /** Update one event */
  updateEvent?: Maybe<Event>
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection
  /**
   * Update many authors
   * @deprecated Please use the new paginated many mutation (updateManyAuthorsConnection)
   */
  updateManyAuthors: BatchPayload
  /** Update many Author documents */
  updateManyAuthorsConnection: AuthorConnection
  /**
   * Update many categories
   * @deprecated Please use the new paginated many mutation (updateManyCategoriesConnection)
   */
  updateManyCategories: BatchPayload
  /** Update many Category documents */
  updateManyCategoriesConnection: CategoryConnection
  /**
   * Update many comments
   * @deprecated Please use the new paginated many mutation (updateManyCommentsConnection)
   */
  updateManyComments: BatchPayload
  /** Update many Comment documents */
  updateManyCommentsConnection: CommentConnection
  /**
   * Update many events
   * @deprecated Please use the new paginated many mutation (updateManyEventsConnection)
   */
  updateManyEvents: BatchPayload
  /** Update many Event documents */
  updateManyEventsConnection: EventConnection
  /**
   * Update many pastEvents
   * @deprecated Please use the new paginated many mutation (updateManyPastEventsConnection)
   */
  updateManyPastEvents: BatchPayload
  /** Update many PastEvent documents */
  updateManyPastEventsConnection: PastEventConnection
  /**
   * Update many posts
   * @deprecated Please use the new paginated many mutation (updateManyPostsConnection)
   */
  updateManyPosts: BatchPayload
  /** Update many Post documents */
  updateManyPostsConnection: PostConnection
  /**
   * Update many workWithuses
   * @deprecated Please use the new paginated many mutation (updateManyWorkWithusesConnection)
   */
  updateManyWorkWithuses: BatchPayload
  /** Update many WorkWithUs documents */
  updateManyWorkWithusesConnection: WorkWithUsConnection
  /** Update one pastEvent */
  updatePastEvent?: Maybe<PastEvent>
  /** Update one post */
  updatePost?: Maybe<Post>
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>
  /** Update one workWithUs */
  updateWorkWithUs?: Maybe<WorkWithUs>
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>
  /** Upsert one author */
  upsertAuthor?: Maybe<Author>
  /** Upsert one category */
  upsertCategory?: Maybe<Category>
  /** Upsert one comment */
  upsertComment?: Maybe<Comment>
  /** Upsert one event */
  upsertEvent?: Maybe<Event>
  /** Upsert one pastEvent */
  upsertPastEvent?: Maybe<PastEvent>
  /** Upsert one post */
  upsertPost?: Maybe<Post>
  /** Upsert one workWithUs */
  upsertWorkWithUs?: Maybe<WorkWithUs>
}

export type MutationCreateAssetArgs = {
  data: AssetCreateInput
}

export type MutationCreateAuthorArgs = {
  data: AuthorCreateInput
}

export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput
}

export type MutationCreateCommentArgs = {
  data: CommentCreateInput
}

export type MutationCreateEventArgs = {
  data: EventCreateInput
}

export type MutationCreatePastEventArgs = {
  data: PastEventCreateInput
}

export type MutationCreatePostArgs = {
  data: PostCreateInput
}

export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput
}

export type MutationCreateWorkWithUsArgs = {
  data: WorkWithUsCreateInput
}

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput
}

export type MutationDeleteAuthorArgs = {
  where: AuthorWhereUniqueInput
}

export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput
}

export type MutationDeleteCommentArgs = {
  where: CommentWhereUniqueInput
}

export type MutationDeleteEventArgs = {
  where: EventWhereUniqueInput
}

export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationDeleteManyAuthorsArgs = {
  where?: InputMaybe<AuthorManyWhereInput>
}

export type MutationDeleteManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AuthorManyWhereInput>
}

export type MutationDeleteManyCategoriesArgs = {
  where?: InputMaybe<CategoryManyWhereInput>
}

export type MutationDeleteManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CategoryManyWhereInput>
}

export type MutationDeleteManyCommentsArgs = {
  where?: InputMaybe<CommentManyWhereInput>
}

export type MutationDeleteManyCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CommentManyWhereInput>
}

export type MutationDeleteManyEventsArgs = {
  where?: InputMaybe<EventManyWhereInput>
}

export type MutationDeleteManyEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<EventManyWhereInput>
}

export type MutationDeleteManyPastEventsArgs = {
  where?: InputMaybe<PastEventManyWhereInput>
}

export type MutationDeleteManyPastEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PastEventManyWhereInput>
}

export type MutationDeleteManyPostsArgs = {
  where?: InputMaybe<PostManyWhereInput>
}

export type MutationDeleteManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PostManyWhereInput>
}

export type MutationDeleteManyWorkWithusesArgs = {
  where?: InputMaybe<WorkWithUsManyWhereInput>
}

export type MutationDeleteManyWorkWithusesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<WorkWithUsManyWhereInput>
}

export type MutationDeletePastEventArgs = {
  where: PastEventWhereUniqueInput
}

export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput
}

export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput
}

export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput
}

export type MutationDeleteWorkWithUsArgs = {
  where: WorkWithUsWhereUniqueInput
}

export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']>
  to?: Array<Stage>
  where: AssetWhereUniqueInput
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationPublishAuthorArgs = {
  to?: Array<Stage>
  where: AuthorWhereUniqueInput
}

export type MutationPublishCategoryArgs = {
  to?: Array<Stage>
  where: CategoryWhereUniqueInput
}

export type MutationPublishCommentArgs = {
  to?: Array<Stage>
  where: CommentWhereUniqueInput
}

export type MutationPublishEventArgs = {
  to?: Array<Stage>
  where: EventWhereUniqueInput
}

export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']>
  to?: Array<Stage>
  where?: InputMaybe<AssetManyWhereInput>
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<AssetManyWhereInput>
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationPublishManyAuthorsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<AuthorManyWhereInput>
}

export type MutationPublishManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<AuthorManyWhereInput>
}

export type MutationPublishManyCategoriesArgs = {
  to?: Array<Stage>
  where?: InputMaybe<CategoryManyWhereInput>
}

export type MutationPublishManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<CategoryManyWhereInput>
}

export type MutationPublishManyCommentsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<CommentManyWhereInput>
}

export type MutationPublishManyCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<CommentManyWhereInput>
}

export type MutationPublishManyEventsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<EventManyWhereInput>
}

export type MutationPublishManyEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<EventManyWhereInput>
}

export type MutationPublishManyPastEventsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<PastEventManyWhereInput>
}

export type MutationPublishManyPastEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<PastEventManyWhereInput>
}

export type MutationPublishManyPostsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<PostManyWhereInput>
}

export type MutationPublishManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<PostManyWhereInput>
}

export type MutationPublishManyWorkWithusesArgs = {
  to?: Array<Stage>
  where?: InputMaybe<WorkWithUsManyWhereInput>
}

export type MutationPublishManyWorkWithusesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<WorkWithUsManyWhereInput>
}

export type MutationPublishPastEventArgs = {
  to?: Array<Stage>
  where: PastEventWhereUniqueInput
}

export type MutationPublishPostArgs = {
  to?: Array<Stage>
  where: PostWhereUniqueInput
}

export type MutationPublishWorkWithUsArgs = {
  to?: Array<Stage>
  where: WorkWithUsWhereUniqueInput
}

export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: AssetWhereUniqueInput
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationSchedulePublishAuthorArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: AuthorWhereUniqueInput
}

export type MutationSchedulePublishCategoryArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: CategoryWhereUniqueInput
}

export type MutationSchedulePublishCommentArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: CommentWhereUniqueInput
}

export type MutationSchedulePublishEventArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: EventWhereUniqueInput
}

export type MutationSchedulePublishPastEventArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: PastEventWhereUniqueInput
}

export type MutationSchedulePublishPostArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: PostWhereUniqueInput
}

export type MutationSchedulePublishWorkWithUsArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: WorkWithUsWhereUniqueInput
}

export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  unpublishBase?: InputMaybe<Scalars['Boolean']>
  where: AssetWhereUniqueInput
}

export type MutationScheduleUnpublishAuthorArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: AuthorWhereUniqueInput
}

export type MutationScheduleUnpublishCategoryArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: CategoryWhereUniqueInput
}

export type MutationScheduleUnpublishCommentArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: CommentWhereUniqueInput
}

export type MutationScheduleUnpublishEventArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: EventWhereUniqueInput
}

export type MutationScheduleUnpublishPastEventArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: PastEventWhereUniqueInput
}

export type MutationScheduleUnpublishPostArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: PostWhereUniqueInput
}

export type MutationScheduleUnpublishWorkWithUsArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: WorkWithUsWhereUniqueInput
}

export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  unpublishBase?: InputMaybe<Scalars['Boolean']>
  where: AssetWhereUniqueInput
}

export type MutationUnpublishAuthorArgs = {
  from?: Array<Stage>
  where: AuthorWhereUniqueInput
}

export type MutationUnpublishCategoryArgs = {
  from?: Array<Stage>
  where: CategoryWhereUniqueInput
}

export type MutationUnpublishCommentArgs = {
  from?: Array<Stage>
  where: CommentWhereUniqueInput
}

export type MutationUnpublishEventArgs = {
  from?: Array<Stage>
  where: EventWhereUniqueInput
}

export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  unpublishBase?: InputMaybe<Scalars['Boolean']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  unpublishBase?: InputMaybe<Scalars['Boolean']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUnpublishManyAuthorsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<AuthorManyWhereInput>
}

export type MutationUnpublishManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<AuthorManyWhereInput>
}

export type MutationUnpublishManyCategoriesArgs = {
  from?: Array<Stage>
  where?: InputMaybe<CategoryManyWhereInput>
}

export type MutationUnpublishManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<CategoryManyWhereInput>
}

export type MutationUnpublishManyCommentsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<CommentManyWhereInput>
}

export type MutationUnpublishManyCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<CommentManyWhereInput>
}

export type MutationUnpublishManyEventsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<EventManyWhereInput>
}

export type MutationUnpublishManyEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<EventManyWhereInput>
}

export type MutationUnpublishManyPastEventsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<PastEventManyWhereInput>
}

export type MutationUnpublishManyPastEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<PastEventManyWhereInput>
}

export type MutationUnpublishManyPostsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<PostManyWhereInput>
}

export type MutationUnpublishManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<PostManyWhereInput>
}

export type MutationUnpublishManyWorkWithusesArgs = {
  from?: Array<Stage>
  where?: InputMaybe<WorkWithUsManyWhereInput>
}

export type MutationUnpublishManyWorkWithusesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<WorkWithUsManyWhereInput>
}

export type MutationUnpublishPastEventArgs = {
  from?: Array<Stage>
  where: PastEventWhereUniqueInput
}

export type MutationUnpublishPostArgs = {
  from?: Array<Stage>
  where: PostWhereUniqueInput
}

export type MutationUnpublishWorkWithUsArgs = {
  from?: Array<Stage>
  where: WorkWithUsWhereUniqueInput
}

export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput
  where: AssetWhereUniqueInput
}

export type MutationUpdateAuthorArgs = {
  data: AuthorUpdateInput
  where: AuthorWhereUniqueInput
}

export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput
  where: CategoryWhereUniqueInput
}

export type MutationUpdateCommentArgs = {
  data: CommentUpdateInput
  where: CommentWhereUniqueInput
}

export type MutationUpdateEventArgs = {
  data: EventUpdateInput
  where: EventWhereUniqueInput
}

export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: AssetUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUpdateManyAuthorsArgs = {
  data: AuthorUpdateManyInput
  where?: InputMaybe<AuthorManyWhereInput>
}

export type MutationUpdateManyAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: AuthorUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AuthorManyWhereInput>
}

export type MutationUpdateManyCategoriesArgs = {
  data: CategoryUpdateManyInput
  where?: InputMaybe<CategoryManyWhereInput>
}

export type MutationUpdateManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: CategoryUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CategoryManyWhereInput>
}

export type MutationUpdateManyCommentsArgs = {
  data: CommentUpdateManyInput
  where?: InputMaybe<CommentManyWhereInput>
}

export type MutationUpdateManyCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: CommentUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CommentManyWhereInput>
}

export type MutationUpdateManyEventsArgs = {
  data: EventUpdateManyInput
  where?: InputMaybe<EventManyWhereInput>
}

export type MutationUpdateManyEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: EventUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<EventManyWhereInput>
}

export type MutationUpdateManyPastEventsArgs = {
  data: PastEventUpdateManyInput
  where?: InputMaybe<PastEventManyWhereInput>
}

export type MutationUpdateManyPastEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: PastEventUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PastEventManyWhereInput>
}

export type MutationUpdateManyPostsArgs = {
  data: PostUpdateManyInput
  where?: InputMaybe<PostManyWhereInput>
}

export type MutationUpdateManyPostsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: PostUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PostManyWhereInput>
}

export type MutationUpdateManyWorkWithusesArgs = {
  data: WorkWithUsUpdateManyInput
  where?: InputMaybe<WorkWithUsManyWhereInput>
}

export type MutationUpdateManyWorkWithusesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: WorkWithUsUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<WorkWithUsManyWhereInput>
}

export type MutationUpdatePastEventArgs = {
  data: PastEventUpdateInput
  where: PastEventWhereUniqueInput
}

export type MutationUpdatePostArgs = {
  data: PostUpdateInput
  where: PostWhereUniqueInput
}

export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput
  where: ScheduledReleaseWhereUniqueInput
}

export type MutationUpdateWorkWithUsArgs = {
  data: WorkWithUsUpdateInput
  where: WorkWithUsWhereUniqueInput
}

export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput
  where: AssetWhereUniqueInput
}

export type MutationUpsertAuthorArgs = {
  upsert: AuthorUpsertInput
  where: AuthorWhereUniqueInput
}

export type MutationUpsertCategoryArgs = {
  upsert: CategoryUpsertInput
  where: CategoryWhereUniqueInput
}

export type MutationUpsertCommentArgs = {
  upsert: CommentUpsertInput
  where: CommentWhereUniqueInput
}

export type MutationUpsertEventArgs = {
  upsert: EventUpsertInput
  where: EventWhereUniqueInput
}

export type MutationUpsertPastEventArgs = {
  upsert: PastEventUpsertInput
  where: PastEventWhereUniqueInput
}

export type MutationUpsertPostArgs = {
  upsert: PostUpsertInput
  where: PostWhereUniqueInput
}

export type MutationUpsertWorkWithUsArgs = {
  upsert: WorkWithUsUpsertInput
  where: WorkWithUsWhereUniqueInput
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']
  /** The Stage of an object */
  stage: Stage
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>
}

export type PastEvent = Node & {
  __typename?: 'PastEvent'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  dateEvent: Scalars['String']
  description: Scalars['String']
  /** Get the document in other stages */
  documentInStages: Array<PastEvent>
  /** List of PastEvent versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  imageCover: Asset
  imagesEvent: Array<Asset>
  name: Scalars['String']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type PastEventCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type PastEventDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type PastEventHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type PastEventImageCoverArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type PastEventImagesEventArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<AssetOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AssetWhereInput>
}

export type PastEventPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type PastEventScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type PastEventUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type PastEventConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: PastEventWhereUniqueInput
}

/** A connection to a list of items. */
export type PastEventConnection = {
  __typename?: 'PastEventConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<PastEventEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type PastEventCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  dateEvent: Scalars['String']
  description: Scalars['String']
  imageCover: AssetCreateOneInlineInput
  imagesEvent?: InputMaybe<AssetCreateManyInlineInput>
  name: Scalars['String']
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type PastEventCreateManyInlineInput = {
  /** Connect multiple existing PastEvent documents */
  connect?: InputMaybe<Array<PastEventWhereUniqueInput>>
  /** Create and connect multiple existing PastEvent documents */
  create?: InputMaybe<Array<PastEventCreateInput>>
}

export type PastEventCreateOneInlineInput = {
  /** Connect one existing PastEvent document */
  connect?: InputMaybe<PastEventWhereUniqueInput>
  /** Create and connect one PastEvent document */
  create?: InputMaybe<PastEventCreateInput>
}

/** An edge in a connection. */
export type PastEventEdge = {
  __typename?: 'PastEventEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: PastEvent
}

/** Identifies documents */
export type PastEventManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PastEventWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PastEventWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PastEventWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  dateEvent?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  dateEvent_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  dateEvent_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  dateEvent_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  dateEvent_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  dateEvent_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  dateEvent_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  dateEvent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  dateEvent_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  dateEvent_starts_with?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  documentInStages_every?: InputMaybe<PastEventWhereStageInput>
  documentInStages_none?: InputMaybe<PastEventWhereStageInput>
  documentInStages_some?: InputMaybe<PastEventWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  imageCover?: InputMaybe<AssetWhereInput>
  imagesEvent_every?: InputMaybe<AssetWhereInput>
  imagesEvent_none?: InputMaybe<AssetWhereInput>
  imagesEvent_some?: InputMaybe<AssetWhereInput>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum PastEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateEventAsc = 'dateEvent_ASC',
  DateEventDesc = 'dateEvent_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type PastEventUpdateInput = {
  dateEvent?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  imageCover?: InputMaybe<AssetUpdateOneInlineInput>
  imagesEvent?: InputMaybe<AssetUpdateManyInlineInput>
  name?: InputMaybe<Scalars['String']>
}

export type PastEventUpdateManyInlineInput = {
  /** Connect multiple existing PastEvent documents */
  connect?: InputMaybe<Array<PastEventConnectInput>>
  /** Create and connect multiple PastEvent documents */
  create?: InputMaybe<Array<PastEventCreateInput>>
  /** Delete multiple PastEvent documents */
  delete?: InputMaybe<Array<PastEventWhereUniqueInput>>
  /** Disconnect multiple PastEvent documents */
  disconnect?: InputMaybe<Array<PastEventWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing PastEvent documents */
  set?: InputMaybe<Array<PastEventWhereUniqueInput>>
  /** Update multiple PastEvent documents */
  update?: InputMaybe<Array<PastEventUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple PastEvent documents */
  upsert?: InputMaybe<Array<PastEventUpsertWithNestedWhereUniqueInput>>
}

export type PastEventUpdateManyInput = {
  dateEvent?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

export type PastEventUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PastEventUpdateManyInput
  /** Document search */
  where: PastEventWhereInput
}

export type PastEventUpdateOneInlineInput = {
  /** Connect existing PastEvent document */
  connect?: InputMaybe<PastEventWhereUniqueInput>
  /** Create and connect one PastEvent document */
  create?: InputMaybe<PastEventCreateInput>
  /** Delete currently connected PastEvent document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected PastEvent document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single PastEvent document */
  update?: InputMaybe<PastEventUpdateWithNestedWhereUniqueInput>
  /** Upsert single PastEvent document */
  upsert?: InputMaybe<PastEventUpsertWithNestedWhereUniqueInput>
}

export type PastEventUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PastEventUpdateInput
  /** Unique document search */
  where: PastEventWhereUniqueInput
}

export type PastEventUpsertInput = {
  /** Create document if it didn't exist */
  create: PastEventCreateInput
  /** Update document if it exists */
  update: PastEventUpdateInput
}

export type PastEventUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PastEventUpsertInput
  /** Unique document search */
  where: PastEventWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type PastEventWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type PastEventWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PastEventWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PastEventWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PastEventWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  dateEvent?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  dateEvent_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  dateEvent_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  dateEvent_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  dateEvent_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  dateEvent_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  dateEvent_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  dateEvent_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  dateEvent_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  dateEvent_starts_with?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  documentInStages_every?: InputMaybe<PastEventWhereStageInput>
  documentInStages_none?: InputMaybe<PastEventWhereStageInput>
  documentInStages_some?: InputMaybe<PastEventWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  imageCover?: InputMaybe<AssetWhereInput>
  imagesEvent_every?: InputMaybe<AssetWhereInput>
  imagesEvent_none?: InputMaybe<AssetWhereInput>
  imagesEvent_some?: InputMaybe<AssetWhereInput>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PastEventWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PastEventWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PastEventWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PastEventWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PastEventWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References PastEvent record uniquely */
export type PastEventWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type Post = Node & {
  __typename?: 'Post'
  author?: Maybe<Author>
  categories: Array<Category>
  comments: Array<Comment>
  content: PostContentRichText
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  date: Scalars['Date']
  /** Get the document in other stages */
  documentInStages: Array<Post>
  excerpt: Scalars['String']
  featuredImage: Asset
  featuredPost: Scalars['Boolean']
  /** List of Post versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  slug: Scalars['String']
  /** System stage field */
  stage: Stage
  title: Scalars['String']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type PostAuthorArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type PostCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<CategoryOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CategoryWhereInput>
}

export type PostCommentsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<CommentOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<CommentWhereInput>
}

export type PostCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type PostDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type PostFeaturedImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type PostHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type PostPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type PostScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type PostUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type PostConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: PostWhereUniqueInput
}

/** A connection to a list of items. */
export type PostConnection = {
  __typename?: 'PostConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<PostEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type PostContentRichText = {
  __typename?: 'PostContentRichText'
  /** Returns HTMl representation */
  html: Scalars['String']
  json: Scalars['RichTextAST']
  /** Returns Markdown representation */
  markdown: Scalars['String']
  /** @deprecated Please use the 'json' field */
  raw: Scalars['RichTextAST']
  references: Array<PostContentRichTextEmbeddedTypes>
  /** Returns plain-text contents of RichText */
  text: Scalars['String']
}

export type PostContentRichTextReferencesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
}

export type PostContentRichTextEmbeddedTypes = Author | Category | Comment

export type PostCreateInput = {
  author?: InputMaybe<AuthorCreateOneInlineInput>
  categories?: InputMaybe<CategoryCreateManyInlineInput>
  comments?: InputMaybe<CommentCreateManyInlineInput>
  content: Scalars['RichTextAST']
  createdAt?: InputMaybe<Scalars['DateTime']>
  date: Scalars['Date']
  excerpt: Scalars['String']
  featuredImage: AssetCreateOneInlineInput
  featuredPost: Scalars['Boolean']
  slug: Scalars['String']
  title: Scalars['String']
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type PostCreateManyInlineInput = {
  /** Connect multiple existing Post documents */
  connect?: InputMaybe<Array<PostWhereUniqueInput>>
  /** Create and connect multiple existing Post documents */
  create?: InputMaybe<Array<PostCreateInput>>
}

export type PostCreateOneInlineInput = {
  /** Connect one existing Post document */
  connect?: InputMaybe<PostWhereUniqueInput>
  /** Create and connect one Post document */
  create?: InputMaybe<PostCreateInput>
}

/** An edge in a connection. */
export type PostEdge = {
  __typename?: 'PostEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Post
}

/** Identifies documents */
export type PostManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PostWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PostWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PostWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  author?: InputMaybe<AuthorWhereInput>
  categories_every?: InputMaybe<CategoryWhereInput>
  categories_none?: InputMaybe<CategoryWhereInput>
  categories_some?: InputMaybe<CategoryWhereInput>
  comments_every?: InputMaybe<CommentWhereInput>
  comments_none?: InputMaybe<CommentWhereInput>
  comments_some?: InputMaybe<CommentWhereInput>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  date?: InputMaybe<Scalars['Date']>
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']>
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']>
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']>
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']>
  /** All values that are not equal to given value. */
  date_not?: InputMaybe<Scalars['Date']>
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  documentInStages_every?: InputMaybe<PostWhereStageInput>
  documentInStages_none?: InputMaybe<PostWhereStageInput>
  documentInStages_some?: InputMaybe<PostWhereStageInput>
  excerpt?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  excerpt_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  excerpt_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  excerpt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  excerpt_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  excerpt_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  excerpt_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  excerpt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  excerpt_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  excerpt_starts_with?: InputMaybe<Scalars['String']>
  featuredImage?: InputMaybe<AssetWhereInput>
  featuredPost?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  featuredPost_not?: InputMaybe<Scalars['Boolean']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  slug?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum PostOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  ExcerptAsc = 'excerpt_ASC',
  ExcerptDesc = 'excerpt_DESC',
  FeaturedPostAsc = 'featuredPost_ASC',
  FeaturedPostDesc = 'featuredPost_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type PostUpdateInput = {
  author?: InputMaybe<AuthorUpdateOneInlineInput>
  categories?: InputMaybe<CategoryUpdateManyInlineInput>
  comments?: InputMaybe<CommentUpdateManyInlineInput>
  content?: InputMaybe<Scalars['RichTextAST']>
  date?: InputMaybe<Scalars['Date']>
  excerpt?: InputMaybe<Scalars['String']>
  featuredImage?: InputMaybe<AssetUpdateOneInlineInput>
  featuredPost?: InputMaybe<Scalars['Boolean']>
  slug?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type PostUpdateManyInlineInput = {
  /** Connect multiple existing Post documents */
  connect?: InputMaybe<Array<PostConnectInput>>
  /** Create and connect multiple Post documents */
  create?: InputMaybe<Array<PostCreateInput>>
  /** Delete multiple Post documents */
  delete?: InputMaybe<Array<PostWhereUniqueInput>>
  /** Disconnect multiple Post documents */
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Post documents */
  set?: InputMaybe<Array<PostWhereUniqueInput>>
  /** Update multiple Post documents */
  update?: InputMaybe<Array<PostUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Post documents */
  upsert?: InputMaybe<Array<PostUpsertWithNestedWhereUniqueInput>>
}

export type PostUpdateManyInput = {
  content?: InputMaybe<Scalars['RichTextAST']>
  date?: InputMaybe<Scalars['Date']>
  excerpt?: InputMaybe<Scalars['String']>
  featuredPost?: InputMaybe<Scalars['Boolean']>
  title?: InputMaybe<Scalars['String']>
}

export type PostUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PostUpdateManyInput
  /** Document search */
  where: PostWhereInput
}

export type PostUpdateOneInlineInput = {
  /** Connect existing Post document */
  connect?: InputMaybe<PostWhereUniqueInput>
  /** Create and connect one Post document */
  create?: InputMaybe<PostCreateInput>
  /** Delete currently connected Post document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Post document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Post document */
  update?: InputMaybe<PostUpdateWithNestedWhereUniqueInput>
  /** Upsert single Post document */
  upsert?: InputMaybe<PostUpsertWithNestedWhereUniqueInput>
}

export type PostUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PostUpdateInput
  /** Unique document search */
  where: PostWhereUniqueInput
}

export type PostUpsertInput = {
  /** Create document if it didn't exist */
  create: PostCreateInput
  /** Update document if it exists */
  update: PostUpdateInput
}

export type PostUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PostUpsertInput
  /** Unique document search */
  where: PostWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type PostWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type PostWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PostWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PostWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PostWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  author?: InputMaybe<AuthorWhereInput>
  categories_every?: InputMaybe<CategoryWhereInput>
  categories_none?: InputMaybe<CategoryWhereInput>
  categories_some?: InputMaybe<CategoryWhereInput>
  comments_every?: InputMaybe<CommentWhereInput>
  comments_none?: InputMaybe<CommentWhereInput>
  comments_some?: InputMaybe<CommentWhereInput>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  date?: InputMaybe<Scalars['Date']>
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']>
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']>
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']>
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']>
  /** All values that are not equal to given value. */
  date_not?: InputMaybe<Scalars['Date']>
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  documentInStages_every?: InputMaybe<PostWhereStageInput>
  documentInStages_none?: InputMaybe<PostWhereStageInput>
  documentInStages_some?: InputMaybe<PostWhereStageInput>
  excerpt?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  excerpt_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  excerpt_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  excerpt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  excerpt_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  excerpt_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  excerpt_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  excerpt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  excerpt_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  excerpt_starts_with?: InputMaybe<Scalars['String']>
  featuredImage?: InputMaybe<AssetWhereInput>
  featuredPost?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  featuredPost_not?: InputMaybe<Scalars['Boolean']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  slug?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PostWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PostWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PostWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PostWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PostWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Post record uniquely */
export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
  slug?: InputMaybe<Scalars['String']>
}

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale
  /** Stages to publish selected locales to */
  stages: Array<Stage>
}

export type Query = {
  __typename?: 'Query'
  /** Retrieve a single asset */
  asset?: Maybe<Asset>
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple assets */
  assets: Array<Asset>
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection
  /** Retrieve a single author */
  author?: Maybe<Author>
  /** Retrieve document version */
  authorVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple authors */
  authors: Array<Author>
  /** Retrieve multiple authors using the Relay connection interface */
  authorsConnection: AuthorConnection
  /** Retrieve multiple categories */
  categories: Array<Category>
  /** Retrieve multiple categories using the Relay connection interface */
  categoriesConnection: CategoryConnection
  /** Retrieve a single category */
  category?: Maybe<Category>
  /** Retrieve document version */
  categoryVersion?: Maybe<DocumentVersion>
  /** Retrieve a single comment */
  comment?: Maybe<Comment>
  /** Retrieve document version */
  commentVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple comments */
  comments: Array<Comment>
  /** Retrieve multiple comments using the Relay connection interface */
  commentsConnection: CommentConnection
  /** Retrieve a single event */
  event?: Maybe<Event>
  /** Retrieve document version */
  eventVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple events */
  events: Array<Event>
  /** Retrieve multiple events using the Relay connection interface */
  eventsConnection: EventConnection
  /** Fetches an object given its ID */
  node?: Maybe<Node>
  /** Retrieve a single pastEvent */
  pastEvent?: Maybe<PastEvent>
  /** Retrieve document version */
  pastEventVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple pastEvents */
  pastEvents: Array<PastEvent>
  /** Retrieve multiple pastEvents using the Relay connection interface */
  pastEventsConnection: PastEventConnection
  /** Retrieve a single post */
  post?: Maybe<Post>
  /** Retrieve document version */
  postVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple posts */
  posts: Array<Post>
  /** Retrieve multiple posts using the Relay connection interface */
  postsConnection: PostConnection
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection
  /** Retrieve a single user */
  user?: Maybe<User>
  /** Retrieve multiple users */
  users: Array<User>
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection
  /** Retrieve a single workWithUs */
  workWithUs?: Maybe<WorkWithUs>
  /** Retrieve document version */
  workWithUsVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple workWithuses */
  workWithuses: Array<WorkWithUs>
  /** Retrieve multiple workWithuses using the Relay connection interface */
  workWithusesConnection: WorkWithUsConnection
}

export type QueryAssetArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: AssetWhereUniqueInput
}

export type QueryAssetVersionArgs = {
  where: VersionWhereInput
}

export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AssetOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<AssetWhereInput>
}

export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AssetOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<AssetWhereInput>
}

export type QueryAuthorArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: AuthorWhereUniqueInput
}

export type QueryAuthorVersionArgs = {
  where: VersionWhereInput
}

export type QueryAuthorsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AuthorOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<AuthorWhereInput>
}

export type QueryAuthorsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AuthorOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<AuthorWhereInput>
}

export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<CategoryOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<CategoryWhereInput>
}

export type QueryCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<CategoryOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<CategoryWhereInput>
}

export type QueryCategoryArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: CategoryWhereUniqueInput
}

export type QueryCategoryVersionArgs = {
  where: VersionWhereInput
}

export type QueryCommentArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: CommentWhereUniqueInput
}

export type QueryCommentVersionArgs = {
  where: VersionWhereInput
}

export type QueryCommentsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<CommentOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<CommentWhereInput>
}

export type QueryCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<CommentOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<CommentWhereInput>
}

export type QueryEventArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: EventWhereUniqueInput
}

export type QueryEventVersionArgs = {
  where: VersionWhereInput
}

export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<EventOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<EventWhereInput>
}

export type QueryEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<EventOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<EventWhereInput>
}

export type QueryNodeArgs = {
  id: Scalars['ID']
  locales?: Array<Locale>
  stage?: Stage
}

export type QueryPastEventArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: PastEventWhereUniqueInput
}

export type QueryPastEventVersionArgs = {
  where: VersionWhereInput
}

export type QueryPastEventsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<PastEventOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<PastEventWhereInput>
}

export type QueryPastEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<PastEventOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<PastEventWhereInput>
}

export type QueryPostArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: PostWhereUniqueInput
}

export type QueryPostVersionArgs = {
  where: VersionWhereInput
}

export type QueryPostsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<PostOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<PostWhereInput>
}

export type QueryPostsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<PostOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<PostWhereInput>
}

export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ScheduledOperationWhereUniqueInput
}

export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ScheduledReleaseWhereUniqueInput
}

export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ScheduledReleaseWhereInput>
}

export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ScheduledReleaseWhereInput>
}

export type QueryUserArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<UserOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<UserWhereInput>
}

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<UserOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<UserWhereInput>
}

export type QueryWorkWithUsArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: WorkWithUsWhereUniqueInput
}

export type QueryWorkWithUsVersionArgs = {
  where: VersionWhereInput
}

export type QueryWorkWithusesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<WorkWithUsOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<WorkWithUsWhereInput>
}

export type QueryWorkWithusesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<WorkWithUsOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<WorkWithUsWhereInput>
}

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA'
  a: Scalars['RGBATransparency']
  b: Scalars['RGBAHue']
  g: Scalars['RGBAHue']
  r: Scalars['RGBAHue']
}

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']
  b: Scalars['RGBAHue']
  g: Scalars['RGBAHue']
  r: Scalars['RGBAHue']
}

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText'
  /** Returns HTMl representation */
  html: Scalars['String']
  /** Returns Markdown representation */
  markdown: Scalars['String']
  /** Returns AST representation */
  raw: Scalars['RichTextAST']
  /** Returns plain-text contents of RichText */
  text: Scalars['String']
}

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation'
  affectedDocuments: Array<ScheduledOperationAffectedDocument>
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Operation description */
  description?: Maybe<Scalars['String']>
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>
  /** System stage field */
  stage: Stage
  /** operation Status */
  status: ScheduledOperationStatus
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
}

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type ScheduledOperationAffectedDocument =
  | Asset
  | Author
  | Category
  | Comment
  | Event
  | PastEvent
  | Post
  | WorkWithUs

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput
}

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>
}

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: ScheduledOperation
}

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  release?: InputMaybe<ScheduledReleaseWhereInput>
  status?: InputMaybe<ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  release?: InputMaybe<ScheduledReleaseWhereInput>
  status?: InputMaybe<ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Release description */
  description?: Maybe<Scalars['String']>
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>
  /** The unique identifier */
  id: Scalars['ID']
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>
  /** System stage field */
  stage: Stage
  /** Release Status */
  status: ScheduledReleaseStatus
  /** Release Title */
  title?: Maybe<Scalars['String']>
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput
}

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  description?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  isActive?: InputMaybe<Scalars['Boolean']>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>
}

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>
}

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: ScheduledRelease
}

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  isActive?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>
  isImplicit?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>
  operations_every?: InputMaybe<ScheduledOperationWhereInput>
  operations_none?: InputMaybe<ScheduledOperationWhereInput>
  operations_some?: InputMaybe<ScheduledOperationWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  status?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  isActive?: InputMaybe<Scalars['Boolean']>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  title?: InputMaybe<Scalars['String']>
}

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>
}

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  isActive?: InputMaybe<Scalars['Boolean']>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  title?: InputMaybe<Scalars['String']>
}

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput
  /** Document search */
  where: ScheduledReleaseWhereInput
}

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>
}

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput
}

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput
}

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput
}

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  isActive?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>
  isImplicit?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>
  operations_every?: InputMaybe<ScheduledOperationWhereInput>
  operations_none?: InputMaybe<ScheduledOperationWhereInput>
  operations_some?: InputMaybe<ScheduledOperationWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  status?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED',
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION',
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>
}

/** User system model */
export type User = Node & {
  __typename?: 'User'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** Get the document in other stages */
  documentInStages: Array<User>
  /** The unique identifier */
  id: Scalars['ID']
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind
  /** The username */
  name: Scalars['String']
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
}

/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: UserWhereUniqueInput
}

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<UserEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>
}

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>
}

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: User
}

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK',
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  documentInStages_every?: InputMaybe<UserWhereStageInput>
  documentInStages_none?: InputMaybe<UserWhereStageInput>
  documentInStages_some?: InputMaybe<UserWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  isActive?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>
  kind?: InputMaybe<UserKind>
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  picture?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
}

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>
}

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>
}

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  documentInStages_every?: InputMaybe<UserWhereStageInput>
  documentInStages_none?: InputMaybe<UserWhereStageInput>
  documentInStages_some?: InputMaybe<UserWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  isActive?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>
  kind?: InputMaybe<UserKind>
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  picture?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type Version = {
  __typename?: 'Version'
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  revision: Scalars['Int']
  stage: Stage
}

export type VersionWhereInput = {
  id: Scalars['ID']
  revision: Scalars['Int']
  stage: Stage
}

export type WorkWithUs = Node & {
  __typename?: 'WorkWithUs'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  description: Scalars['String']
  /** Get the document in other stages */
  documentInStages: Array<WorkWithUs>
  /** List of WorkWithUs versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  title: Scalars['String']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type WorkWithUsCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type WorkWithUsDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type WorkWithUsHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type WorkWithUsPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type WorkWithUsScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type WorkWithUsUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>
  locales?: InputMaybe<Array<Locale>>
}

export type WorkWithUsConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: WorkWithUsWhereUniqueInput
}

/** A connection to a list of items. */
export type WorkWithUsConnection = {
  __typename?: 'WorkWithUsConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<WorkWithUsEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type WorkWithUsCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  description: Scalars['String']
  title: Scalars['String']
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type WorkWithUsCreateManyInlineInput = {
  /** Connect multiple existing WorkWithUs documents */
  connect?: InputMaybe<Array<WorkWithUsWhereUniqueInput>>
  /** Create and connect multiple existing WorkWithUs documents */
  create?: InputMaybe<Array<WorkWithUsCreateInput>>
}

export type WorkWithUsCreateOneInlineInput = {
  /** Connect one existing WorkWithUs document */
  connect?: InputMaybe<WorkWithUsWhereUniqueInput>
  /** Create and connect one WorkWithUs document */
  create?: InputMaybe<WorkWithUsCreateInput>
}

/** An edge in a connection. */
export type WorkWithUsEdge = {
  __typename?: 'WorkWithUsEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: WorkWithUs
}

/** Identifies documents */
export type WorkWithUsManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WorkWithUsWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WorkWithUsWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WorkWithUsWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  documentInStages_every?: InputMaybe<WorkWithUsWhereStageInput>
  documentInStages_none?: InputMaybe<WorkWithUsWhereStageInput>
  documentInStages_some?: InputMaybe<WorkWithUsWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum WorkWithUsOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type WorkWithUsUpdateInput = {
  description?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type WorkWithUsUpdateManyInlineInput = {
  /** Connect multiple existing WorkWithUs documents */
  connect?: InputMaybe<Array<WorkWithUsConnectInput>>
  /** Create and connect multiple WorkWithUs documents */
  create?: InputMaybe<Array<WorkWithUsCreateInput>>
  /** Delete multiple WorkWithUs documents */
  delete?: InputMaybe<Array<WorkWithUsWhereUniqueInput>>
  /** Disconnect multiple WorkWithUs documents */
  disconnect?: InputMaybe<Array<WorkWithUsWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing WorkWithUs documents */
  set?: InputMaybe<Array<WorkWithUsWhereUniqueInput>>
  /** Update multiple WorkWithUs documents */
  update?: InputMaybe<Array<WorkWithUsUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple WorkWithUs documents */
  upsert?: InputMaybe<Array<WorkWithUsUpsertWithNestedWhereUniqueInput>>
}

export type WorkWithUsUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type WorkWithUsUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: WorkWithUsUpdateManyInput
  /** Document search */
  where: WorkWithUsWhereInput
}

export type WorkWithUsUpdateOneInlineInput = {
  /** Connect existing WorkWithUs document */
  connect?: InputMaybe<WorkWithUsWhereUniqueInput>
  /** Create and connect one WorkWithUs document */
  create?: InputMaybe<WorkWithUsCreateInput>
  /** Delete currently connected WorkWithUs document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected WorkWithUs document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single WorkWithUs document */
  update?: InputMaybe<WorkWithUsUpdateWithNestedWhereUniqueInput>
  /** Upsert single WorkWithUs document */
  upsert?: InputMaybe<WorkWithUsUpsertWithNestedWhereUniqueInput>
}

export type WorkWithUsUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: WorkWithUsUpdateInput
  /** Unique document search */
  where: WorkWithUsWhereUniqueInput
}

export type WorkWithUsUpsertInput = {
  /** Create document if it didn't exist */
  create: WorkWithUsCreateInput
  /** Update document if it exists */
  update: WorkWithUsUpdateInput
}

export type WorkWithUsUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: WorkWithUsUpsertInput
  /** Unique document search */
  where: WorkWithUsWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type WorkWithUsWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type WorkWithUsWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WorkWithUsWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WorkWithUsWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WorkWithUsWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  documentInStages_every?: InputMaybe<WorkWithUsWhereStageInput>
  documentInStages_none?: InputMaybe<WorkWithUsWhereStageInput>
  documentInStages_some?: InputMaybe<WorkWithUsWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type WorkWithUsWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WorkWithUsWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WorkWithUsWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WorkWithUsWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<WorkWithUsWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References WorkWithUs record uniquely */
export type WorkWithUsWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual',
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert',
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one',
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update',
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union',
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization',
}

export type AdjacentPostsQueryVariables = Exact<{
  createdAt: Scalars['DateTime']
  slug: Scalars['String']
}>

export type AdjacentPostsQuery = {
  __typename?: 'Query'
  next: Array<{
    __typename?: 'Post'
    title: string
    date: any
    createdAt: any
    slug: string
    featuredImage: { __typename?: 'Asset'; url: string }
  }>
  previous: Array<{
    __typename?: 'Post'
    title: string
    date: any
    createdAt: any
    slug: string
    featuredImage: { __typename?: 'Asset'; url: string }
  }>
}

export type CategoriesQueryVariables = Exact<{ [key: string]: never }>

export type CategoriesQuery = {
  __typename?: 'Query'
  categories: Array<{
    __typename?: 'Category'
    id: string
    name: string
    slug: string
  }>
}

export type CategoryPostsQueryVariables = Exact<{
  slug: Scalars['String']
}>

export type CategoryPostsQuery = {
  __typename?: 'Query'
  postsConnection: {
    __typename?: 'PostConnection'
    edges: Array<{
      __typename?: 'PostEdge'
      cursor: string
      node: {
        __typename?: 'Post'
        date: any
        slug: string
        title: string
        excerpt: string
        author?: {
          __typename?: 'Author'
          bio?: string | null
          name: string
          id: string
          photo: { __typename?: 'Asset'; url: string }
        } | null
        featuredImage: { __typename?: 'Asset'; url: string }
        categories: Array<{
          __typename?: 'Category'
          name: string
          slug: string
        }>
      }
    }>
  }
}

export type CommentsQueryVariables = Exact<{
  slug: Scalars['String']
}>

export type CommentsQuery = {
  __typename?: 'Query'
  comments: Array<{
    __typename?: 'Comment'
    id: string
    name: string
    createdAt: any
    comment: string
  }>
}

export type EventsQueryVariables = Exact<{ [key: string]: never }>

export type EventsQuery = {
  __typename?: 'Query'
  events: Array<{
    __typename?: 'Event'
    id: string
    name: string
    local: string
    description?: string | null
    date: string
    imageCover: { __typename?: 'Asset'; url: string }
  }>
}

export type FeaturedCallRecent5PostsQueryVariables = Exact<{
  [key: string]: never
}>

export type FeaturedCallRecent5PostsQuery = {
  __typename?: 'Query'
  posts: Array<{
    __typename?: 'Post'
    title: string
    slug: string
    date: any
    createdAt: any
    author?: {
      __typename?: 'Author'
      name: string
      photo: { __typename?: 'Asset'; url: string }
    } | null
    featuredImage: { __typename?: 'Asset'; url: string }
  }>
}

export type FeaturedPostQueryVariables = Exact<{ [key: string]: never }>

export type FeaturedPostQuery = {
  __typename?: 'Query'
  posts: Array<{
    __typename?: 'Post'
    title: string
    slug: string
    date: any
    createdAt: any
    author?: {
      __typename?: 'Author'
      name: string
      photo: { __typename?: 'Asset'; url: string }
    } | null
    featuredImage: { __typename?: 'Asset'; url: string }
  }>
}

export type Last3PostsQueryVariables = Exact<{ [key: string]: never }>

export type Last3PostsQuery = {
  __typename?: 'Query'
  posts: Array<{
    __typename?: 'Post'
    id: string
    title: string
    date: any
    slug: string
    featuredImage: { __typename?: 'Asset'; url: string }
  }>
}

export type PastEventsQueryVariables = Exact<{ [key: string]: never }>

export type PastEventsQuery = {
  __typename?: 'Query'
  pastEvents: Array<{
    __typename?: 'PastEvent'
    name: string
    description: string
    dateEvent: string
    imagesEvent: Array<{ __typename?: 'Asset'; url: string }>
  }>
}

export type PostQueryVariables = Exact<{
  slug: Scalars['String']
}>

export type PostQuery = {
  __typename?: 'Query'
  post?: {
    __typename?: 'Post'
    createdAt: any
    date: any
    slug: string
    title: string
    excerpt: string
    author?: {
      __typename?: 'Author'
      bio?: string | null
      name: string
      photo: { __typename?: 'Asset'; url: string }
    } | null
    featuredImage: { __typename?: 'Asset'; url: string }
    categories: Array<{
      __typename?: 'Category'
      id: string
      slug: string
      name: string
    }>
    content: { __typename?: 'PostContentRichText'; html: string }
  } | null
}

export type PostsQueryVariables = Exact<{ [key: string]: never }>

export type PostsQuery = {
  __typename?: 'Query'
  posts: Array<{
    __typename?: 'Post'
    date: any
    slug: string
    title: string
    excerpt: string
    author?: {
      __typename?: 'Author'
      bio?: string | null
      name: string
      id: string
      photo: { __typename?: 'Asset'; url: string }
    } | null
    featuredImage: { __typename?: 'Asset'; url: string }
    categories: Array<{ __typename?: 'Category'; slug: string; name: string }>
  }>
}

export type SimilarPostsQueryVariables = Exact<{
  slug: Scalars['String']
  categories?: InputMaybe<Array<Scalars['String']> | Scalars['String']>
}>

export type SimilarPostsQuery = {
  __typename?: 'Query'
  posts: Array<{
    __typename?: 'Post'
    id: string
    title: string
    date: any
    slug: string
    featuredImage: { __typename?: 'Asset'; url: string }
  }>
}

export type WorkWithUsQueryVariables = Exact<{ [key: string]: never }>

export type WorkWithUsQuery = {
  __typename?: 'Query'
  workWithuses: Array<{
    __typename?: 'WorkWithUs'
    description: string
    id: string
    title: string
  }>
}

export const AdjacentPostsDocument = gql`
  query AdjacentPosts($createdAt: DateTime!, $slug: String!) {
    next: posts(
      first: 1
      orderBy: createdAt_ASC
      where: { slug_not: $slug, AND: { createdAt_gte: $createdAt } }
    ) {
      title
      featuredImage {
        url
      }
      date
      createdAt
      slug
    }
    previous: posts(
      first: 1
      orderBy: createdAt_DESC
      where: { slug_not: $slug, AND: { createdAt_lte: $createdAt } }
    ) {
      title
      featuredImage {
        url
      }
      date
      createdAt
      slug
    }
  }
`

export function useAdjacentPostsQuery(
  options: Omit<Urql.UseQueryArgs<AdjacentPostsQueryVariables>, 'query'>,
) {
  return Urql.useQuery<AdjacentPostsQuery, AdjacentPostsQueryVariables>({
    query: AdjacentPostsDocument,
    ...options,
  })
}
export const CategoriesDocument = gql`
  query Categories {
    categories(orderBy: name_ASC) {
      id
      name
      slug
    }
  }
`

export function useCategoriesQuery(
  options?: Omit<Urql.UseQueryArgs<CategoriesQueryVariables>, 'query'>,
) {
  return Urql.useQuery<CategoriesQuery, CategoriesQueryVariables>({
    query: CategoriesDocument,
    ...options,
  })
}
export const CategoryPostsDocument = gql`
  query CategoryPosts($slug: String!) {
    postsConnection(where: { categories_some: { slug: $slug } }) {
      edges {
        cursor
        node {
          author {
            bio
            name
            id
            photo {
              url
            }
          }
          date
          slug
          title
          excerpt
          featuredImage {
            url
          }
          categories {
            name
            slug
          }
        }
      }
    }
  }
`

export function useCategoryPostsQuery(
  options: Omit<Urql.UseQueryArgs<CategoryPostsQueryVariables>, 'query'>,
) {
  return Urql.useQuery<CategoryPostsQuery, CategoryPostsQueryVariables>({
    query: CategoryPostsDocument,
    ...options,
  })
}
export const CommentsDocument = gql`
  query Comments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      id
      name
      createdAt
      comment
    }
  }
`

export function useCommentsQuery(
  options: Omit<Urql.UseQueryArgs<CommentsQueryVariables>, 'query'>,
) {
  return Urql.useQuery<CommentsQuery, CommentsQueryVariables>({
    query: CommentsDocument,
    ...options,
  })
}
export const EventsDocument = gql`
  query Events {
    events(orderBy: date_ASC) {
      id
      name
      local
      description
      date
      imageCover {
        url
      }
    }
  }
`

export function useEventsQuery(
  options?: Omit<Urql.UseQueryArgs<EventsQueryVariables>, 'query'>,
) {
  return Urql.useQuery<EventsQuery, EventsQueryVariables>({
    query: EventsDocument,
    ...options,
  })
}
export const FeaturedCallRecent5PostsDocument = gql`
  query FeaturedCallRecent5Posts {
    posts(where: { featuredPost: true }, orderBy: date_ASC, last: 5) {
      author {
        name
        photo {
          url
        }
      }
      featuredImage {
        url
      }
      title
      slug
      date
      createdAt
    }
  }
`

export function useFeaturedCallRecent5PostsQuery(
  options?: Omit<
    Urql.UseQueryArgs<FeaturedCallRecent5PostsQueryVariables>,
    'query'
  >,
) {
  return Urql.useQuery<
    FeaturedCallRecent5PostsQuery,
    FeaturedCallRecent5PostsQueryVariables
  >({ query: FeaturedCallRecent5PostsDocument, ...options })
}
export const FeaturedPostDocument = gql`
  query FeaturedPost {
    posts(where: { featuredPost: true }) {
      author {
        name
        photo {
          url
        }
      }
      featuredImage {
        url
      }
      title
      slug
      date
      createdAt
    }
  }
`

export function useFeaturedPostQuery(
  options?: Omit<Urql.UseQueryArgs<FeaturedPostQueryVariables>, 'query'>,
) {
  return Urql.useQuery<FeaturedPostQuery, FeaturedPostQueryVariables>({
    query: FeaturedPostDocument,
    ...options,
  })
}
export const Last3PostsDocument = gql`
  query Last3Posts {
    posts(orderBy: date_ASC, last: 3) {
      id
      title
      featuredImage {
        url
      }
      date
      slug
    }
  }
`

export function useLast3PostsQuery(
  options?: Omit<Urql.UseQueryArgs<Last3PostsQueryVariables>, 'query'>,
) {
  return Urql.useQuery<Last3PostsQuery, Last3PostsQueryVariables>({
    query: Last3PostsDocument,
    ...options,
  })
}
export const PastEventsDocument = gql`
  query PastEvents {
    pastEvents {
      name
      description
      dateEvent
      imagesEvent {
        url
      }
    }
  }
`

export function usePastEventsQuery(
  options?: Omit<Urql.UseQueryArgs<PastEventsQueryVariables>, 'query'>,
) {
  return Urql.useQuery<PastEventsQuery, PastEventsQueryVariables>({
    query: PastEventsDocument,
    ...options,
  })
}
export const PostDocument = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        bio
        name
        photo {
          url
        }
      }
      createdAt
      date
      slug
      title
      excerpt
      featuredImage {
        url
      }
      categories {
        id
        slug
        name
      }
      content {
        html
      }
    }
  }
`

export function usePostQuery(
  options: Omit<Urql.UseQueryArgs<PostQueryVariables>, 'query'>,
) {
  return Urql.useQuery<PostQuery, PostQueryVariables>({
    query: PostDocument,
    ...options,
  })
}
export const PostsDocument = gql`
  query Posts {
    posts(orderBy: date_DESC) {
      author {
        bio
        name
        id
        photo {
          url
        }
      }
      date
      slug
      title
      excerpt
      featuredImage {
        url
      }
      categories {
        slug
        name
      }
    }
  }
`

export function usePostsQuery(
  options?: Omit<Urql.UseQueryArgs<PostsQueryVariables>, 'query'>,
) {
  return Urql.useQuery<PostsQuery, PostsQueryVariables>({
    query: PostsDocument,
    ...options,
  })
}
export const SimilarPostsDocument = gql`
  query SimilarPosts($slug: String!, $categories: [String!]) {
    posts(
      where: {
        slug_not: $slug
        AND: { categories_some: { slug_in: $categories } }
      }
      last: 3
    ) {
      id
      title
      featuredImage {
        url
      }
      date
      slug
    }
  }
`

export function useSimilarPostsQuery(
  options: Omit<Urql.UseQueryArgs<SimilarPostsQueryVariables>, 'query'>,
) {
  return Urql.useQuery<SimilarPostsQuery, SimilarPostsQueryVariables>({
    query: SimilarPostsDocument,
    ...options,
  })
}
export const WorkWithUsDocument = gql`
  query WorkWithUs {
    workWithuses {
      description
      id
      title
    }
  }
`

export function useWorkWithUsQuery(
  options?: Omit<Urql.UseQueryArgs<WorkWithUsQueryVariables>, 'query'>,
) {
  return Urql.useQuery<WorkWithUsQuery, WorkWithUsQueryVariables>({
    query: WorkWithUsDocument,
    ...options,
  })
}
