PGDMP         5            	    {            react_qpick_shop    11.21    11.21 .    7           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            8           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            9           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            :           1262    16393    react_qpick_shop    DATABASE     �   CREATE DATABASE react_qpick_shop WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Russian_Russia.1251' LC_CTYPE = 'Russian_Russia.1251';
     DROP DATABASE react_qpick_shop;
             postgres    false            �            1259    16452    basket_products    TABLE     �   CREATE TABLE public.basket_products (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "basketId" integer,
    "productId" integer
);
 #   DROP TABLE public.basket_products;
       public         postgres    false            �            1259    16450    basket_products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.basket_products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.basket_products_id_seq;
       public       postgres    false    205            ;           0    0    basket_products_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.basket_products_id_seq OWNED BY public.basket_products.id;
            public       postgres    false    204            �            1259    16439    baskets    TABLE     �   CREATE TABLE public.baskets (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer
);
    DROP TABLE public.baskets;
       public         postgres    false            �            1259    16437    baskets_id_seq    SEQUENCE     �   CREATE SEQUENCE public.baskets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.baskets_id_seq;
       public       postgres    false    203            <           0    0    baskets_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.baskets_id_seq OWNED BY public.baskets.id;
            public       postgres    false    202            �            1259    16410 
   categories    TABLE     �   CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.categories;
       public         postgres    false            �            1259    16408    categories_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.categories_id_seq;
       public       postgres    false    199            =           0    0    categories_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;
            public       postgres    false    198            �            1259    16420    products    TABLE     �  CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    price integer NOT NULL,
    rating double precision DEFAULT '0'::double precision,
    imgs character varying(255)[] NOT NULL,
    info character varying(255)[],
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "categoryId" integer
);
    DROP TABLE public.products;
       public         postgres    false            �            1259    16418    products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public       postgres    false    201            >           0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
            public       postgres    false    200            �            1259    16396    users    TABLE     9  CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    role character varying(255) DEFAULT 'USER'::character varying,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.users;
       public         postgres    false            �            1259    16394    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public       postgres    false    197            ?           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
            public       postgres    false    196            �
           2604    16455    basket_products id    DEFAULT     x   ALTER TABLE ONLY public.basket_products ALTER COLUMN id SET DEFAULT nextval('public.basket_products_id_seq'::regclass);
 A   ALTER TABLE public.basket_products ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    205    204    205            �
           2604    16442 
   baskets id    DEFAULT     h   ALTER TABLE ONLY public.baskets ALTER COLUMN id SET DEFAULT nextval('public.baskets_id_seq'::regclass);
 9   ALTER TABLE public.baskets ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    203    202    203            �
           2604    16413    categories id    DEFAULT     n   ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);
 <   ALTER TABLE public.categories ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    199    198    199            �
           2604    16423    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    200    201    201            �
           2604    16399    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    197    196    197            4          0    16452    basket_products 
   TABLE DATA               `   COPY public.basket_products (id, "createdAt", "updatedAt", "basketId", "productId") FROM stdin;
    public       postgres    false    205   5       2          0    16439    baskets 
   TABLE DATA               I   COPY public.baskets (id, "createdAt", "updatedAt", "userId") FROM stdin;
    public       postgres    false    203   ;5       .          0    16410 
   categories 
   TABLE DATA               H   COPY public.categories (id, name, "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    199   x5       0          0    16420    products 
   TABLE DATA               o   COPY public.products (id, name, price, rating, imgs, info, "createdAt", "updatedAt", "categoryId") FROM stdin;
    public       postgres    false    201   �5       ,          0    16396    users 
   TABLE DATA               T   COPY public.users (id, email, password, role, "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    197   �6       @           0    0    basket_products_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.basket_products_id_seq', 1, false);
            public       postgres    false    204            A           0    0    baskets_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.baskets_id_seq', 1, true);
            public       postgres    false    202            B           0    0    categories_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.categories_id_seq', 1, true);
            public       postgres    false    198            C           0    0    products_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.products_id_seq', 1, true);
            public       postgres    false    200            D           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 1, true);
            public       postgres    false    196            �
           2606    16457 $   basket_products basket_products_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.basket_products
    ADD CONSTRAINT basket_products_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.basket_products DROP CONSTRAINT basket_products_pkey;
       public         postgres    false    205            �
           2606    16444    baskets baskets_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.baskets
    ADD CONSTRAINT baskets_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.baskets DROP CONSTRAINT baskets_pkey;
       public         postgres    false    203            �
           2606    16417    categories categories_name_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_name_key UNIQUE (name);
 H   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_name_key;
       public         postgres    false    199            �
           2606    16415    categories categories_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public         postgres    false    199            �
           2606    16431    products products_name_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_name_key UNIQUE (name);
 D   ALTER TABLE ONLY public.products DROP CONSTRAINT products_name_key;
       public         postgres    false    201            �
           2606    16429    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public         postgres    false    201            �
           2606    16407    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public         postgres    false    197            �
           2606    16405    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public         postgres    false    197            �
           2606    16458 -   basket_products basket_products_basketId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.basket_products
    ADD CONSTRAINT "basket_products_basketId_fkey" FOREIGN KEY ("basketId") REFERENCES public.baskets(id) ON UPDATE CASCADE ON DELETE SET NULL;
 Y   ALTER TABLE ONLY public.basket_products DROP CONSTRAINT "basket_products_basketId_fkey";
       public       postgres    false    205    2731    203            �
           2606    16463 .   basket_products basket_products_productId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.basket_products
    ADD CONSTRAINT "basket_products_productId_fkey" FOREIGN KEY ("productId") REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE SET NULL;
 Z   ALTER TABLE ONLY public.basket_products DROP CONSTRAINT "basket_products_productId_fkey";
       public       postgres    false    205    201    2729            �
           2606    16445    baskets baskets_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.baskets
    ADD CONSTRAINT "baskets_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 G   ALTER TABLE ONLY public.baskets DROP CONSTRAINT "baskets_userId_fkey";
       public       postgres    false    203    2721    197            �
           2606    16432 !   products products_categoryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT "products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public.categories(id) ON UPDATE CASCADE ON DELETE SET NULL;
 M   ALTER TABLE ONLY public.products DROP CONSTRAINT "products_categoryId_fkey";
       public       postgres    false    199    201    2725            4      x������ � �      2   -   x�3�4202�54�5�P0��25�21�32��60�'e����� v%T      .   ?   x�3�0���;.콰�®;8���ut�,-�L���̵L�Hq��qqq ���      0   �   x�}�1�@D���V�ݿ,��y`cpA
� !!6�ÞH����s#���L�k�*�ק]a
Rr��x�ڗeV�����̩���&�`��g�g2�����k�=�G�v��S�
\���Tް؆&�����r�;�c;��ylp���'s�\o��s�neB�"�>W.�)06�0�7*=b      ,   |   x�3�,��/q�M���+*�T1JR10U�,)O�2ȭ�2w3�*-��u�O)Է�+/)IsJ)�p).q/
��p/���rr��tt����4202�54�5�P0��25�21�320�60�#����� �p%c     