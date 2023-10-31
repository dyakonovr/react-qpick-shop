PGDMP      3            	    {            react_qpick_shop    16.0    16.0 .    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16471    react_qpick_shop    DATABASE     �   CREATE DATABASE react_qpick_shop WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
     DROP DATABASE react_qpick_shop;
                postgres    false            �            1259    16472    basket_products    TABLE     r   CREATE TABLE public.basket_products (
    id integer NOT NULL,
    "basketId" integer,
    "productId" integer
);
 #   DROP TABLE public.basket_products;
       public         heap    postgres    false            �            1259    16475    basket_products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.basket_products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.basket_products_id_seq;
       public          postgres    false    215            �           0    0    basket_products_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.basket_products_id_seq OWNED BY public.basket_products.id;
          public          postgres    false    216            �            1259    16476    baskets    TABLE     O   CREATE TABLE public.baskets (
    id integer NOT NULL,
    "userId" integer
);
    DROP TABLE public.baskets;
       public         heap    postgres    false            �            1259    16479    baskets_id_seq    SEQUENCE     �   CREATE SEQUENCE public.baskets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.baskets_id_seq;
       public          postgres    false    217            �           0    0    baskets_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.baskets_id_seq OWNED BY public.baskets.id;
          public          postgres    false    218            �            1259    16480 
   categories    TABLE     f   CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);
    DROP TABLE public.categories;
       public         heap    postgres    false            �            1259    16483    categories_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.categories_id_seq;
       public          postgres    false    219            �           0    0    categories_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;
          public          postgres    false    220            �            1259    16484    products    TABLE     $  CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    price integer NOT NULL,
    rating double precision DEFAULT '0'::double precision,
    imgs character varying(255)[] NOT NULL,
    info character varying(255)[],
    "categoryId" integer
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    16490    products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public          postgres    false    221            �           0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
          public          postgres    false    222            �            1259    16491    users    TABLE     9  CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    role character varying(255) DEFAULT 'USER'::character varying,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16497    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    223            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    224            .           2604    16498    basket_products id    DEFAULT     x   ALTER TABLE ONLY public.basket_products ALTER COLUMN id SET DEFAULT nextval('public.basket_products_id_seq'::regclass);
 A   ALTER TABLE public.basket_products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215            /           2604    16499 
   baskets id    DEFAULT     h   ALTER TABLE ONLY public.baskets ALTER COLUMN id SET DEFAULT nextval('public.baskets_id_seq'::regclass);
 9   ALTER TABLE public.baskets ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217            0           2604    16500    categories id    DEFAULT     n   ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);
 <   ALTER TABLE public.categories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219            1           2604    16501    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221            3           2604    16502    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223            �          0    16472    basket_products 
   TABLE DATA           F   COPY public.basket_products (id, "basketId", "productId") FROM stdin;
    public          postgres    false    215   �3       �          0    16476    baskets 
   TABLE DATA           /   COPY public.baskets (id, "userId") FROM stdin;
    public          postgres    false    217   �3       �          0    16480 
   categories 
   TABLE DATA           .   COPY public.categories (id, name) FROM stdin;
    public          postgres    false    219   4       �          0    16484    products 
   TABLE DATA           U   COPY public.products (id, name, price, rating, imgs, info, "categoryId") FROM stdin;
    public          postgres    false    221   d4       �          0    16491    users 
   TABLE DATA           T   COPY public.users (id, email, password, role, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    223   f5       �           0    0    basket_products_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.basket_products_id_seq', 1, false);
          public          postgres    false    216            �           0    0    baskets_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.baskets_id_seq', 2, true);
          public          postgres    false    218            �           0    0    categories_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.categories_id_seq', 2, true);
          public          postgres    false    220            �           0    0    products_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.products_id_seq', 4, true);
          public          postgres    false    222            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 2, true);
          public          postgres    false    224            6           2606    16504 $   basket_products basket_products_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.basket_products
    ADD CONSTRAINT basket_products_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.basket_products DROP CONSTRAINT basket_products_pkey;
       public            postgres    false    215            8           2606    16506    baskets baskets_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.baskets
    ADD CONSTRAINT baskets_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.baskets DROP CONSTRAINT baskets_pkey;
       public            postgres    false    217            :           2606    16508    categories categories_name_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_name_key UNIQUE (name);
 H   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_name_key;
       public            postgres    false    219            <           2606    16510    categories categories_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    219            >           2606    16512    products products_name_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_name_key UNIQUE (name);
 D   ALTER TABLE ONLY public.products DROP CONSTRAINT products_name_key;
       public            postgres    false    221            @           2606    16514    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    221            B           2606    16516    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    223            D           2606    16518    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    223            E           2606    16519 -   basket_products basket_products_basketId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.basket_products
    ADD CONSTRAINT "basket_products_basketId_fkey" FOREIGN KEY ("basketId") REFERENCES public.baskets(id) ON UPDATE CASCADE ON DELETE SET NULL;
 Y   ALTER TABLE ONLY public.basket_products DROP CONSTRAINT "basket_products_basketId_fkey";
       public          postgres    false    215    217    4664            F           2606    16524 .   basket_products basket_products_productId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.basket_products
    ADD CONSTRAINT "basket_products_productId_fkey" FOREIGN KEY ("productId") REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE SET NULL;
 Z   ALTER TABLE ONLY public.basket_products DROP CONSTRAINT "basket_products_productId_fkey";
       public          postgres    false    4672    215    221            G           2606    16529    baskets baskets_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.baskets
    ADD CONSTRAINT "baskets_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 G   ALTER TABLE ONLY public.baskets DROP CONSTRAINT "baskets_userId_fkey";
       public          postgres    false    217    4676    223            H           2606    16534 !   products products_categoryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT "products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public.categories(id) ON UPDATE CASCADE ON DELETE SET NULL;
 M   ALTER TABLE ONLY public.products DROP CONSTRAINT "products_categoryId_fkey";
       public          postgres    false    4668    219    221            �      x������ � �      �      x�3�4�2�4����� ��      �   6   x�+ ��1	Наушники
2	Телефоны
\.


H��      �   �   x���1KA���_�\��7�s�#�����	qsIa@ ������v��$�s��M����0�W|�=��i5(�kM@	9 ���4MY���>�Me��0�������Rjy<�iƞ\2��z�(�.#'�01�,_�2�i���|I���#��wtq�o�S�S�{�ֲ��>�68���F+@E�
�����"���@b�/����夘y��U�o祯n��}�Pߝ1ƻ�ȫ����R�P?�T      �   �   x�}�Mo�0��s�)v�f��o��iu�ɐ݌l�"�M����_�,f&;?��c!UU���LnLU#���gg��4y��*r��xñN�n_�3�͂��x�A�s��Zv�T�a!ы�ڶH���l�I9k�Oj�T?�N��_"�8�8�_������ ,�Y%WL3��YH]v\d�g�'��_���E\��Im�ݸOxjb� k�G�     