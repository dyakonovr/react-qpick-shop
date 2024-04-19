PGDMP                      |            react_qpick_shop    16.0    16.0 X    $           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            %           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            &           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            '           1262    35395    react_qpick_shop    DATABASE     �   CREATE DATABASE react_qpick_shop WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
     DROP DATABASE react_qpick_shop;
                postgres    false            �            1259    35473    basket_items    TABLE     �   CREATE TABLE public.basket_items (
    id integer NOT NULL,
    quantity integer DEFAULT 1 NOT NULL,
    basket_id integer,
    product_id integer
);
     DROP TABLE public.basket_items;
       public         heap    postgres    false            �            1259    35472    basket_items_id_seq    SEQUENCE     �   CREATE SEQUENCE public.basket_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.basket_items_id_seq;
       public          postgres    false    228            (           0    0    basket_items_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.basket_items_id_seq OWNED BY public.basket_items.id;
          public          postgres    false    227            �            1259    35461    baskets    TABLE     N   CREATE TABLE public.baskets (
    id integer NOT NULL,
    user_id integer
);
    DROP TABLE public.baskets;
       public         heap    postgres    false            �            1259    35460    baskets_id_seq    SEQUENCE     �   CREATE SEQUENCE public.baskets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.baskets_id_seq;
       public          postgres    false    226            )           0    0    baskets_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.baskets_id_seq OWNED BY public.baskets.id;
          public          postgres    false    225            �            1259    35409 
   categories    TABLE     f   CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);
    DROP TABLE public.categories;
       public         heap    postgres    false            �            1259    35408    categories_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.categories_id_seq;
       public          postgres    false    218            *           0    0    categories_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;
          public          postgres    false    217            �            1259    35532 
   favourites    TABLE     �   CREATE TABLE public.favourites (
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    "userId" integer NOT NULL,
    "productId" integer NOT NULL
);
    DROP TABLE public.favourites;
       public         heap    postgres    false            �            1259    35517    order_selling_items    TABLE     �   CREATE TABLE public.order_selling_items (
    quantity integer NOT NULL,
    order_id integer NOT NULL,
    selling_item_id integer NOT NULL
);
 '   DROP TABLE public.order_selling_items;
       public         heap    postgres    false            �            1259    35491    orders    TABLE     �   CREATE TABLE public.orders (
    id integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    user_id integer
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    35490    orders_id_seq    SEQUENCE     �   CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.orders_id_seq;
       public          postgres    false    230            +           0    0    orders_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;
          public          postgres    false    229            �            1259    35447    product_characteristics    TABLE     �   CREATE TABLE public.product_characteristics (
    id integer NOT NULL,
    name character varying(255),
    value character varying(255),
    product_id integer
);
 +   DROP TABLE public.product_characteristics;
       public         heap    postgres    false            �            1259    35446    product_characteristics_id_seq    SEQUENCE     �   CREATE SEQUENCE public.product_characteristics_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.product_characteristics_id_seq;
       public          postgres    false    224            ,           0    0    product_characteristics_id_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.product_characteristics_id_seq OWNED BY public.product_characteristics.id;
          public          postgres    false    223            �            1259    35435    product_images    TABLE     x   CREATE TABLE public.product_images (
    id integer NOT NULL,
    url character varying(255),
    product_id integer
);
 "   DROP TABLE public.product_images;
       public         heap    postgres    false            �            1259    35434    product_images_id_seq    SEQUENCE     �   CREATE SEQUENCE public.product_images_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.product_images_id_seq;
       public          postgres    false    222            -           0    0    product_images_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.product_images_id_seq OWNED BY public.product_images.id;
          public          postgres    false    221            �            1259    35418    products    TABLE     �   CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    price integer NOT NULL,
    rating double precision DEFAULT '0'::double precision,
    image character varying(255) NOT NULL,
    category_id integer
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    35417    products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public          postgres    false    220            .           0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
          public          postgres    false    219            �            1259    35503    selling_items    TABLE       CREATE TABLE public.selling_items (
    id integer NOT NULL,
    old_product_name character varying(255) NOT NULL,
    old_product_price integer NOT NULL,
    old_product_image character varying(255) NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    product_id integer
);
 !   DROP TABLE public.selling_items;
       public         heap    postgres    false            �            1259    35502    selling_items_id_seq    SEQUENCE     �   CREATE SEQUENCE public.selling_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.selling_items_id_seq;
       public          postgres    false    232            /           0    0    selling_items_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.selling_items_id_seq OWNED BY public.selling_items.id;
          public          postgres    false    231            �            1259    35397    users    TABLE     7  CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    role character varying(255) DEFAULT 'USER'::character varying,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    35396    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    216            0           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    215            R           2604    35476    basket_items id    DEFAULT     r   ALTER TABLE ONLY public.basket_items ALTER COLUMN id SET DEFAULT nextval('public.basket_items_id_seq'::regclass);
 >   ALTER TABLE public.basket_items ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    227    228            Q           2604    35464 
   baskets id    DEFAULT     h   ALTER TABLE ONLY public.baskets ALTER COLUMN id SET DEFAULT nextval('public.baskets_id_seq'::regclass);
 9   ALTER TABLE public.baskets ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225    226            L           2604    35412    categories id    DEFAULT     n   ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);
 <   ALTER TABLE public.categories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            T           2604    35494 	   orders id    DEFAULT     f   ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);
 8   ALTER TABLE public.orders ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    230    229    230            P           2604    35450    product_characteristics id    DEFAULT     �   ALTER TABLE ONLY public.product_characteristics ALTER COLUMN id SET DEFAULT nextval('public.product_characteristics_id_seq'::regclass);
 I   ALTER TABLE public.product_characteristics ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223    224            O           2604    35438    product_images id    DEFAULT     v   ALTER TABLE ONLY public.product_images ALTER COLUMN id SET DEFAULT nextval('public.product_images_id_seq'::regclass);
 @   ALTER TABLE public.product_images ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    222    222            M           2604    35421    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            U           2604    35506    selling_items id    DEFAULT     t   ALTER TABLE ONLY public.selling_items ALTER COLUMN id SET DEFAULT nextval('public.selling_items_id_seq'::regclass);
 ?   ALTER TABLE public.selling_items ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    232    231    232            J           2604    35400    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216                      0    35473    basket_items 
   TABLE DATA           K   COPY public.basket_items (id, quantity, basket_id, product_id) FROM stdin;
    public          postgres    false    228   �i                 0    35461    baskets 
   TABLE DATA           .   COPY public.baskets (id, user_id) FROM stdin;
    public          postgres    false    226    j                 0    35409 
   categories 
   TABLE DATA           .   COPY public.categories (id, name) FROM stdin;
    public          postgres    false    218   Ej       !          0    35532 
   favourites 
   TABLE DATA           S   COPY public.favourites (created_at, updated_at, "userId", "productId") FROM stdin;
    public          postgres    false    234   k                  0    35517    order_selling_items 
   TABLE DATA           R   COPY public.order_selling_items (quantity, order_id, selling_item_id) FROM stdin;
    public          postgres    false    233   ,k                 0    35491    orders 
   TABLE DATA           E   COPY public.orders (id, created_at, updated_at, user_id) FROM stdin;
    public          postgres    false    230   Ik                 0    35447    product_characteristics 
   TABLE DATA           N   COPY public.product_characteristics (id, name, value, product_id) FROM stdin;
    public          postgres    false    224   fk                 0    35435    product_images 
   TABLE DATA           =   COPY public.product_images (id, url, product_id) FROM stdin;
    public          postgres    false    222   �q                 0    35418    products 
   TABLE DATA           O   COPY public.products (id, name, price, rating, image, category_id) FROM stdin;
    public          postgres    false    220   :x                 0    35503    selling_items 
   TABLE DATA           z   COPY public.selling_items (id, old_product_name, old_product_price, old_product_image, is_active, product_id) FROM stdin;
    public          postgres    false    232   |                 0    35397    users 
   TABLE DATA           R   COPY public.users (id, email, password, role, created_at, updated_at) FROM stdin;
    public          postgres    false    216    |       1           0    0    basket_items_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.basket_items_id_seq', 1, true);
          public          postgres    false    227            2           0    0    baskets_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.baskets_id_seq', 1, false);
          public          postgres    false    225            3           0    0    categories_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.categories_id_seq', 10, true);
          public          postgres    false    217            4           0    0    orders_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.orders_id_seq', 1, false);
          public          postgres    false    229            5           0    0    product_characteristics_id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public.product_characteristics_id_seq', 94, true);
          public          postgres    false    223            6           0    0    product_images_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.product_images_id_seq', 94, true);
          public          postgres    false    221            7           0    0    products_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.products_id_seq', 25, true);
          public          postgres    false    219            8           0    0    selling_items_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.selling_items_id_seq', 1, false);
          public          postgres    false    231            9           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 2, true);
          public          postgres    false    215            j           2606    35479    basket_items basket_items_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.basket_items
    ADD CONSTRAINT basket_items_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.basket_items DROP CONSTRAINT basket_items_pkey;
       public            postgres    false    228            h           2606    35466    baskets baskets_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.baskets
    ADD CONSTRAINT baskets_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.baskets DROP CONSTRAINT baskets_pkey;
       public            postgres    false    226            \           2606    35416    categories categories_name_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_name_key UNIQUE (name);
 H   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_name_key;
       public            postgres    false    218            ^           2606    35414    categories categories_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    218            r           2606    35536    favourites favourites_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public.favourites
    ADD CONSTRAINT favourites_pkey PRIMARY KEY ("userId", "productId");
 D   ALTER TABLE ONLY public.favourites DROP CONSTRAINT favourites_pkey;
       public            postgres    false    234    234            p           2606    35521 ,   order_selling_items order_selling_items_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.order_selling_items
    ADD CONSTRAINT order_selling_items_pkey PRIMARY KEY (order_id, selling_item_id);
 V   ALTER TABLE ONLY public.order_selling_items DROP CONSTRAINT order_selling_items_pkey;
       public            postgres    false    233    233            l           2606    35496    orders orders_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    230            f           2606    35454 4   product_characteristics product_characteristics_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public.product_characteristics
    ADD CONSTRAINT product_characteristics_pkey PRIMARY KEY (id);
 ^   ALTER TABLE ONLY public.product_characteristics DROP CONSTRAINT product_characteristics_pkey;
       public            postgres    false    224            d           2606    35440 "   product_images product_images_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.product_images
    ADD CONSTRAINT product_images_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.product_images DROP CONSTRAINT product_images_pkey;
       public            postgres    false    222            `           2606    35428    products products_name_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_name_key UNIQUE (name);
 D   ALTER TABLE ONLY public.products DROP CONSTRAINT products_name_key;
       public            postgres    false    220            b           2606    35426    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    220            n           2606    35511     selling_items selling_items_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.selling_items
    ADD CONSTRAINT selling_items_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.selling_items DROP CONSTRAINT selling_items_pkey;
       public            postgres    false    232            X           2606    35407    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    216            Z           2606    35405    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    216            w           2606    35480 (   basket_items basket_items_basket_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.basket_items
    ADD CONSTRAINT basket_items_basket_id_fkey FOREIGN KEY (basket_id) REFERENCES public.baskets(id) ON UPDATE CASCADE ON DELETE SET NULL;
 R   ALTER TABLE ONLY public.basket_items DROP CONSTRAINT basket_items_basket_id_fkey;
       public          postgres    false    228    4712    226            x           2606    35485 )   basket_items basket_items_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.basket_items
    ADD CONSTRAINT basket_items_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE SET NULL;
 S   ALTER TABLE ONLY public.basket_items DROP CONSTRAINT basket_items_product_id_fkey;
       public          postgres    false    220    228    4706            v           2606    35467    baskets baskets_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.baskets
    ADD CONSTRAINT baskets_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 F   ALTER TABLE ONLY public.baskets DROP CONSTRAINT baskets_user_id_fkey;
       public          postgres    false    226    4698    216            }           2606    35542 $   favourites favourites_productId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.favourites
    ADD CONSTRAINT "favourites_productId_fkey" FOREIGN KEY ("productId") REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE CASCADE;
 P   ALTER TABLE ONLY public.favourites DROP CONSTRAINT "favourites_productId_fkey";
       public          postgres    false    234    220    4706            ~           2606    35537 !   favourites favourites_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.favourites
    ADD CONSTRAINT "favourites_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.favourites DROP CONSTRAINT "favourites_userId_fkey";
       public          postgres    false    234    4698    216            {           2606    35522 5   order_selling_items order_selling_items_order_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.order_selling_items
    ADD CONSTRAINT order_selling_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id) ON UPDATE CASCADE ON DELETE CASCADE;
 _   ALTER TABLE ONLY public.order_selling_items DROP CONSTRAINT order_selling_items_order_id_fkey;
       public          postgres    false    230    233    4716            |           2606    35527 <   order_selling_items order_selling_items_selling_item_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.order_selling_items
    ADD CONSTRAINT order_selling_items_selling_item_id_fkey FOREIGN KEY (selling_item_id) REFERENCES public.selling_items(id) ON UPDATE CASCADE ON DELETE CASCADE;
 f   ALTER TABLE ONLY public.order_selling_items DROP CONSTRAINT order_selling_items_selling_item_id_fkey;
       public          postgres    false    233    4718    232            y           2606    35497    orders orders_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 D   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_user_id_fkey;
       public          postgres    false    230    4698    216            u           2606    35455 ?   product_characteristics product_characteristics_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.product_characteristics
    ADD CONSTRAINT product_characteristics_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE SET NULL;
 i   ALTER TABLE ONLY public.product_characteristics DROP CONSTRAINT product_characteristics_product_id_fkey;
       public          postgres    false    4706    220    224            t           2606    35441 -   product_images product_images_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.product_images
    ADD CONSTRAINT product_images_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE SET NULL;
 W   ALTER TABLE ONLY public.product_images DROP CONSTRAINT product_images_product_id_fkey;
       public          postgres    false    222    4706    220            s           2606    35429 "   products products_category_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id) ON UPDATE CASCADE ON DELETE SET NULL;
 L   ALTER TABLE ONLY public.products DROP CONSTRAINT products_category_id_fkey;
       public          postgres    false    220    4702    218            z           2606    35512 +   selling_items selling_items_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.selling_items
    ADD CONSTRAINT selling_items_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE SET NULL;
 U   ALTER TABLE ONLY public.selling_items DROP CONSTRAINT selling_items_product_id_fkey;
       public          postgres    false    232    4706    220                  x�3�4A�=... ��            x�3�4�2�4����� ��         �   x�5��JAD��_1_ ƨ��D�a#x��;[�ݡg�`��	a�E=^���s�)��T.�Gzp�� ��ߚ^ >L���noފ��߳�B��M�����a���FO��1	��t.����p��	(�MC�_��q���:�����h��6zu��<�!c�w��#���G���Dߪc+�fa��#�$MI      !      x������ � �             x������ � �            x������ � �         _  x��Z�v�6]_1��9�O�Z�v�u�N�M7	I8"����Q��?�J��;G6�Ih\�ܹ�x�u!���}к��O�n�.����K%Ռƪ�;��k�/���,��X�}���֢hm�RV�+YY-KA�����W����hn
�]ѵx�˦��JXZ�zN����.�aJ/�J�@swsI���狋R�浳8�[qS�t��<Y7 y�K��F+�{��L+]ɜģ�W�|��s.��s]�ZQ�T�W�����J,x.L��۟W�䅻i�s���r๋�7n!�ssӮ�K\I��%`��ٹ�j�T+g
kM!�nA� WT��H����@l�m�*� �*mk�uSJ;'��L��n�����K�,�nW�+#�ʶ��ZW���ѫ������y�b���fR=Al�Sc�KqQ7K�������pV
 �ơY��箷��W�zeh=��� 
�7�ne.��}B�z����6k��e�k���2�}��">���O�q-�(�ma�~��MxX��������jP��RN7��ڜܺ0�6�*^���ӈ�<�i�^�"�4��� �Q������ 0�
1N.�0�(���Ɵ&C\��_h��Ȋ�����\�`��{
|��P��_�S�ƈ������j��W�v1_��[��t�%� \��Z1Y�L�WV�a� �4-Ow[�e4���w9����ga1e�[q���;��f]q��� �ZLh�y�rxf�~�f�x���9�ۙ��mCSY{1½؜�t�Lk�q!�Ġ�I]x��!�~�=��W9�DR.�h�����QH�Y�s/�ZYP��c3�e�����矼U��(��MU�"E%+aA�J�Peޥ ���x�h���LɄ���CM�K�����a8�r�6��>�ퟶz�O��;��yF��xp�:��ɸ���/D������, �sm0z�\�;X�j$�~��_���63�*�n8	�U�L�PҺu�D�Qr�*��/�
|�5���7����ls���n�ڌEg��j�4uqՇr�F��˓Q���`�He�B��Oo���f��񌅣�>��g,�{�jyV��٠'��E��]G�S�>��������x-,LwD��gQ�ݻ�tя��}���YC�⃠�E�j��ѓnvD����a�tN�rƃשc��Ňm�O��]���͡�8�'ֹ����i'BA����y^/��K�e�_���u�˘ţ��]c������u�����gl°��>HX�6�=s �� `��G�zV��dx��~�&���7�$#����[ٶ�퀮�}�ݭ��%g^ʆ���m�����n;�������d���0�n]��@���8�4<to7<��w�K���#/�l����҃����=w����Vt��'�Y�l���=;�������<��l'�p�,��%���v������=zw F��:��0d��J�j8ۯ�b��~��]7�'Jt�v�m��0bY|rn��a�C��X�����>�_n�����Kkgg*���a̲~�W�F�Hɇ����gU���³�\�Ү�}K�c�Sa�A9����1������         U  x��Xˊ]G\��1�^-uB~$;�m&��R��Ν#�E�b����T*y����?�����˷߿����O��}������*������_��|��3S���4��C|i��
��&�dx��A��v��l���Ԍ�{��%��k���ja��2�×�`������5
�z�ơ�c�1���r�¶|��P��*��y�}�¶�Xl��4}�?�Z��Y�w�6=���s=��x����X���H� �:��F�p��^�_`���?�Z(�F�kv	*Ώ�]K �נ�Q�w�2,p�#Sf܋���+�/"��)P �W�U�s�)��u�-�1.�סN)�e���9Pʳ/�B�e(��rJ!��Q�ZaW2ȉ���(Q���
h����А_�(Q�p�@(�Z�J���JT��qx�.	B9$A�D����>��P҆��#.i�(T�w�eb&��9�;D!�YLBc�	�0�����*��(K$ů��4J���
²x���b8��F��&F���ם��{%[a#P�;�'n!u0/�<���ǧ]����M;��6	!�]��.m�8�p���0$�5X,	%�U8\y��� E�(Ѣ�-�g>"��:`������-M�W\������&k���[�CӞ�
���	J��y
ěF��ؿ@��#��24��FBZ�i2�������+���(����+�{=��hI�	�S�	��5�eM�)o@���Ș�N�^8�E����`��H�YӺ�".�5t�bx�$!��td^$X����Q?��Bi҇@׹0t�|
��@���<&���Ɍțzf�A!�Ї�!�m���N�Z��-2�fQ�)(�F�h�v6{deـ3�cб��k�Z؟9+�2}���W��#��5 :�+lnqma\���^ثieY :;�k�ޥH���ࡨ.L!��$G��� #$)���� �fwGaB�h�6���4AI6z<�t�+C#H��1"����12�%C#H[�}��X 0bΆ�qyc���)0��A�t&�W��i��~��2:�0�Q14��Y8�A�0��@�K�.�w�m�/�u�1��</���Q�K�8'QW��|eh$)^8����� U�24�+� ��}���&��.M"��bs@Ϭ{X�w}�
G��<��s�R��Ir�0��U���YzXW4�-��6Bq��{�"��M�p��
ЪP�#]R芦q?�i4m$r�c�@eP1�k�/9�c�PRs&I�n���]�8s��*��dh�h�8.��b}����&�#�<2��"P24�\�p�����+;W14>9���b�� ;�w�F�>G��B�""�*�kv���S#�#�!@��"������-�Ԁ0^��e�Q8F�&1`i]$IB
v�AW����\z��&I
{qC�b�q:g14�|n8i�9��lK���IR
�Ѣ�ao�@�2�%C#���c�%1-�夛�$����?��;�T.v�N�OM`P)ɉ�U��ku~fa79��ӄ&fΌ�������3�i�����-�Zݧ�Q8G~��;&�l}����g<i~���&�
G �/��&vG�K�_?\��/���         �  x��V]o�6|�~�~��K�@�F�MP#�c_�;�'X'��4����)8�_|^���i�/��4R}=��T��vTb�Q�qj?�/�OWW�0��c�n���v8\�(Oð��u���g�,ֻhH(Z��UV}L�m�v��������i�";���^��BFQݙ��1&hg�
�S�7����N���4)�6(����}FQ>�s����ĠbE���t]}�5��nQ�g5�^�E8���M��'.2���W�s��)�s}3��1��?ӗOC3�����\Fq[6��	?Z�~P��O#z�����9u ����ryvEyZ���{�1h�c
4�k?u�똦}}�T�.���(���7��� `_�����e��g�	�<9��@z�.�!���6��y&~�Z��䓦���u��H`C& �o�I����\�7�S�u�6q�y�;�}�^����n��)����ͷ/�����\�8�?� �g��]ڷ�\۱y�1�q�7���uN�
�=f�9�y�����`0H�*4)�+����_�v�Ѳ��X�O�	d��Q�e��T�r���!���4�(d��OqF���T����sJ]}��,	dx5=Iǌ�yp��9�F}�'�k��3�Yx��q&:̷�adHFy�&Èfo-9:�����y��XER������2���]0��򉕑�{��]�ϓ�� ѕ��Q�[��Z��F@c�Q�5����i��� ��?!����0�;70[
�p�gx��*����7nn�)�'8`�b�3J���f����ܰwc�����?G���v]?N2������d���'8�o_4�V��3�x�e�Z��'�l][ܾ��Gw�ȏ^1����u�&2������3;�-�;�\f��s�
.,�q�����K�N����ʟ�M���ǯ�M$�|�0#��O��﫿7UU����            x������ � �         �   x����N�0 ��sy
�1����%$N��-������-����c�ݾ�����m�Ս%5��,��~��[�9a���SX�L���w��IBg(ɻ<�݈��\�A$�XUB�Rq��ԋk-���c֛}x az�~bW6[a�r���D��e`��B���i����;<��粄��-�\�
�)�ixϒAOk�h|��*�p���7�O�?���a�]C_�     