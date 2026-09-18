const logotext = "PHAN HUU KHA";

const meta = {
  title: "Phan Huu Kha — Backend & Systems Engineering Portfolio",
  description:
    "Portfolio of Phan Huu Kha — Software Engineering Student at Sai Gon University specializing in Backend Architecture, Systems Internals, Cryptography, and Distributed Systems.",
};

const introdata = {
  title: "Phan Huu Kha",
  animated: {
    first: "Backend & Systems Tinkerer ⚙️",
    second: "Learning systems by breaking them (and fixing at 2 AM) ☕",
    third: "Professional Segfault, Deadlock & CORS Tamer 🤠",
    fourth: "Future Full-Stack, currently Full-Bugs & Distributed Logs 🥲",
  },
  description:
    "Final-year Software Engineering student at Sai Gon University with a genuine obsession for backend architectures, systems internals, and security engineering. My learning philosophy is trial-by-fire: from reversing Windows DPAPI calls in native C++ and untangling Kafka consumer rebalances, to witnessing cryptographic Sparse Merkle Trees on Ethereum and calibrating hybrid RAG pipelines. I believe the best way to master high-performance, fault-tolerant engineering is to dive straight into the internals, break things under stress, and understand every layer from memory buffers to distributed clusters.",
  my_img_url: require("../assets/images/avatar.jpg"),
  my_cv: require("../assets/cv-phanhuukha.pdf"),
  github: "https://github.com/phwkha",
  email: "phanhuukha.work@gmail.com",
  phone: "038 522 7984",
};

const skills = [
  { name: "Java / Spring Boot", level: 85 },
  { name: "C++ / Win32 & Systems Internals", level: 70 },
  { name: "Python / Django", level: 75 },
  { name: "React / Vite / Three.js", level: 75 },
  { name: "Docker & Jenkins CI/CD", level: 70 },
  { name: "Apache Kafka & Event Streaming", level: 70 },
  { name: "Redis & Caching/Pub-Sub", level: 75 },
  { name: "Cryptography & DPAPI (E2EE/SMT)", level: 80 },
  { name: "RAG & Vector DB (FAISS/LangChain)", level: 75 },
  { name: "PostgreSQL & MongoDB (Polyglot DB)", level: 80 },
];

const projects = [
  {
    id: "smart-doc-ai",
    title: "Smart-Doc AI",
    subtitle: "Production RAG & Multi-Modal Document Assistant",
    summary:
      "An advanced Retrieval-Augmented Generation (RAG) platform and multi-modal document assistant built on Django 5 and Daphne ASGI. Ingests complex PDFs, DOCX files, images, and live web pages via the Cloudflare Browser Rendering API. Integrates dense vector search (FAISS Cosine) with sparse keyword retrieval (BM25) via a session-cached ensemble retriever, re-ranks retrieved chunks using a neural Cross-Encoder (BAAI/bge-reranker-v2-m3), and executes an autonomous multi-hop query refinement loop with Self-RAG evaluation before streaming responses over WebSockets.",
    image: "/rag_thumbnail.png",
    stack: [
      "Python 3.12",
      "Django 5 / Daphne",
      "Django Channels",
      "LangChain",
      "FAISS",
      "BM25",
      "Cross-Encoder",
      "Ollama (Qwen 2)",
      "EasyOCR",
      "PostgreSQL 15",
      "Docker Compose",
      "Streamlit",
    ],
    highlights: [
      "Hybrid Search with Session-Aware BM25 Cache: Paired FAISS dense cosine embeddings (weight 0.6) with BM25 sparse keyword retrieval (weight 0.4) using an in-memory thread-safe LRU cache that invalidates dynamically based on index file modification timestamps (mtime) upon new document ingestion.",
      "Neural Cross-Encoder Re-Ranking: Implemented deep query-document cross-attention scoring using BAAI/bge-reranker-v2-m3, mapping raw logits to a calibrated [0, 1] probability scale via numerically clamped sigmoid normalization (clamp [-60, 60]) to filter low-confidence context.",
      "Multi-Hop Reasoning & Self-RAG Refinement: Implemented automatic followup query formulation when initial candidate confidence is < 0.85, deduplicating cross-hop passages with SHA-1 hashes; scored candidate responses against Groundedness (40%), Relevance (25%), Completeness (25%), and Citation (10%) with up to 2 autonomous query refinement loops.",
      "Multi-Modal Ingestion & Atomic Index Rollback: Processed digital PDFs with automatic fallback to EasyOCR rendered at 300 DPI for scanned pages (< 15 characters) bounded by concurrency semaphores; enforced SHA-256 deduplication and atomic index snapshot (.bak) rollbacks with database cleanup on failures.",
      "Honest Limitations & Takeaways: Currently uses an in-memory channel layer and local directory-partitioned FAISS indices, meaning multi-instance horizontal scaling would require migrating to a Redis channel layer and a managed distributed vector store like pgvector.",
    ],
    architecture: [
      "Multi-Modal Ingestion (OCR / Cloudflare Crawler)",
      "Ensemble Retrieval (FAISS 0.6 + BM25 0.4)",
      "Neural Cross-Encoder Re-Ranking (bge-reranker)",
      "Multi-Hop & Self-RAG Evaluator",
      "Daphne ASGI WebSocket Streaming",
    ],
    url: "https://github.com/phwkha/Smart-Doc-AI",
    accent: "#06b6d4",
  },
  {
    id: "secure-chat-web",
    title: "Secure Chat Web",
    subtitle: "Zero-Knowledge E2EE & Key Transparency Messenger",
    summary:
      "An enterprise-grade, zero-knowledge end-to-end encrypted messaging application integrating a decentralized Key Transparency architecture. Built with Java 17 / Spring Boot 3.5 on the backend and React 19 / Vite on the frontend, the system treats the server as an untrusted blind relay. It combines client-side Web Crypto API primitives (AES-256-GCM + dual RSA-OAEP 2048-bit key wrapping) with a 256-depth Sparse Merkle Tree (SMT) with RFC 6962 proofs. Tree roots are signed via Ed25519 and witnessed on Ethereum Sepolia smart contracts, while an in-band Gossip protocol detects server-side Split-View and MITM attacks.",
    image: "/e2ee_thumbnail.png",
    stack: [
      "Java 17",
      "Spring Boot 3.5",
      "React 19 / Vite",
      "Web Crypto API",
      "Sparse Merkle Tree",
      "Ethereum Sepolia",
      "Web3j",
      "PostgreSQL 15",
      "MongoDB 7",
      "WebSocket / STOMP",
      "Docker",
    ],
    highlights: [
      "Client-Side Zero-Knowledge Cryptography: Master keys derived on the client from user PIN using PBKDF2-HMAC-SHA256 (100,000 iterations); payloads encrypted with AES-256-GCM and dual-wrapped with recipient and sender RSA-OAEP 2048-bit public keys, keeping server relays and databases strictly blind.",
      "256-Depth Sparse Merkle Tree (SMT): Organized user public keys and state into a 256-depth SMT matching SHA-256 output, enforcing RFC 6962 domain separation (0x00 leaf prefix, 0x01 interior node prefix) to produce verifiable cryptographic inclusion and consistency proofs.",
      "Decentralized Blockchain Witnessing & Asynchronous Debouncing: Anchored Merkle roots to an Ethereum Sepolia smart contract using Web3j FastRawTransactionManager, governed by dual-stage ScheduledExecutorService debouncing (1s tree debounce, 3s blockchain debounce) to optimize throughput and prevent gas exhaustion.",
      "In-Band Gossip Protocol & Split-View Auditing: Embedded signed Merkle root headers inside encrypted chat payloads, enabling recipient clients to audit incoming roots against local history and smart contract commitments to detect Split-View attacks in real time.",
      "Honest Limitations & Takeaways: Uses static RSA-OAEP key wrapping without ephemeral Double Ratchet forward secrecy; blockchain RPC verification introduces network latency buffers (1.5s client retry) and dependency on public Sepolia testnet uptime.",
    ],
    architecture: [
      "Client Web Crypto Key Gen & PBKDF2",
      "256-Depth Sparse Merkle Tree (SMT)",
      "Ethereum Sepolia Smart Contract Witness",
      "Spring Boot Blind Relay & STOMP",
      "In-Band Gossip Verification",
    ],
    url: "https://github.com/phwkha/Secure-Chat-Web---End-to-End-Encryption-Key-Transparency",
    accent: "#10b981",
  },
  {
    id: "confession-wall",
    title: "Confession Wall (Bức Tường Thú Tội)",
    subtitle: "Fullstack Anonymous Feed & Interactive 3D WebGL Board",
    summary:
      "A high-performance fullstack anonymous community platform built with Spring Boot 3.2, React 18, and Three.js / React Three Fiber. Features instant feed propagation via Server-Sent Events (SSE) synchronized with database transactions, sub-millisecond full-text search powered by PostgreSQL GIN trigram (pg_trgm) indexing, and an immersive ambient 3D scene using instanced WebGL geometry. Hardened with sliding-window rate limiting, timing-safe double-submit CSRF tokens, and an automated 5-stage Jenkins CI/CD deployment pipeline.",
    image: "/confession_thumbnail.png",
    stack: [
      "Java 17",
      "Spring Boot 3.2",
      "React 18 / Vite",
      "Three.js / React Three Fiber",
      "Server-Sent Events (SSE)",
      "PostgreSQL 15 (pg_trgm)",
      "Docker Compose",
      "Jenkins CI/CD",
      "Nginx",
      "Tailwind CSS",
    ],
    highlights: [
      "Transaction-Coupled SSE Real-Time Streaming: Implemented SseEmitter streaming with 25-second heartbeat keep-alives and unbuffered Nginx proxying, synchronizing broadcasts via TransactionSynchronizationManager.afterCommit() to eliminate ghost broadcasts from rolled-back transactions.",
      "PostgreSQL Trigram GIN Search Engine: Initialized database-level pg_trgm extensions and GIN trigram indexes on startup, providing sub-millisecond case-insensitive pattern matching (ILIKE) across confession contents and author names.",
      "Multi-Layer Defensive Security Architecture: Built an in-memory sliding-window IP rate limiter with ConcurrentHashMap and Deques, constant-time double-submit CSRF verification (MessageDigest.isEqual), modern Sec-Fetch-Site origin enforcement, and pessimistic database locking (PESSIMISTIC_WRITE) on reactions.",
      "Instanced WebGL 3D Ambient Graphics: Designed custom 3D Bézier heart geometries rendered via instancedMesh in a single GPU draw call, featuring mobile DPR throttling and WebGLBoundary error fallbacks.",
      "Automated Jenkins CI/CD Pipeline & Honest Limitations: Created a 5-stage Jenkins pipeline automating Maven testing, multi-stage Docker builds, Docker Hub publishing, and SSH deployment with healthcheck polling. (Limitation: In-memory rate limiting and SSE tracking reside on a single JVM node, requiring Redis for horizontal multi-replica clustering).",
    ],
    architecture: [
      "React 18 + Three.js WebGL",
      "Nginx Ingress (Unbuffered SSE)",
      "Spring Boot 3 + Transaction Sync",
      "PostgreSQL 15 (GIN pg_trgm)",
      "Jenkins CI/CD Pipeline",
    ],
    url: "https://github.com/phwkha/Confession-Wall",
    accent: "#a855f7",
  },
  {
    id: "chromium-password-extractor",
    title: "ChromiumPassExtractor",
    subtitle: "Windows Internals & Cryptographic Credential Recovery Engine",
    summary:
      "A native C++ systems engineering tool designed for Microsoft Windows that extracts, parses, and decrypts saved credentials across all user profiles of Chromium-based browsers (Google Chrome, Microsoft Edge, Cốc Cốc, and Brave). The tool reverses the Chromium v80+ security architecture: reading JSON Local State, stripping the 5-byte DPAPI signature, recovering the AES-256 Master Key via Windows DPAPI, circumvents active browser SQLite database locks via hot-copy snapshots, and decrypts authenticated AES-256-GCM password blobs using Windows Cryptography Next Generation (CNG).",
    image: "/chromium_thumbnail.png",
    stack: [
      "C++17",
      "Win32 APIs",
      "Windows DPAPI (CryptUnprotectData)",
      "Windows CNG / BCrypt",
      "AES-256-GCM",
      "SQLite3 Amalgamation",
      "Visual Studio",
    ],
    highlights: [
      "Chromium Master Key Extraction via Windows DPAPI: Parsed Local State JSON to extract os_crypt.encrypted_key, stripped the 5-byte DPAPI header, and decrypted the 32-byte AES-256 Master Key in-memory using Win32 CryptUnprotectData rooted in Windows Local Security Authority.",
      "Authenticated AES-256-GCM Decryption via Windows CNG: Configured Windows Cryptography Next Generation (BCrypt) with BCRYPT_CHAIN_MODE_GCM to parse v10/v20 password payloads, verifying 12-byte nonces and 16-byte Galois authentication tags with strict zero-leak memory cleanup.",
      "Hot-Copy SQLite Lock Circumvention: Solved exclusive file locking (FILE_SHARE_READ denial) caused by running browser processes by generating randomized snapshot clones with Win32 CopyFileA, querying login tables offline, and sanitizing temporary files via DeleteFileA.",
      "Autonomous Multi-Browser & Multi-Profile Traversal: Implemented directory discovery using Win32 FindFirstFileA / FindNextFileA, crawling default and secondary profiles (Profile 1, Profile 2) across Chrome, Edge, Cốc Cốc, and Brave without hardcoded paths.",
      "Honest Systems Limitations: Deeply coupled to Windows OS internals and requires execution within the interactive logged-in user context; cannot run on Linux/macOS or decrypt offline user stores without credentials, and exclusively targets Chromium schemas.",
    ],
    architecture: [
      "Environment Discovery (%LOCALAPPDATA%)",
      "DPAPI Master Key Decryption",
      "Hot-Copy SQLite Lock Bypass",
      "CNG BCrypt AES-GCM Decryption",
      "In-Process Memory Sanitization",
    ],
    url: "https://github.com/phwkha/Chromium-Password-Extractor",
    accent: "#0ea5e9",
  },
  {
    id: "chatweb",
    title: "ChatWeb",
    subtitle: "High-Performance Event-Driven Messaging Platform",
    summary:
      "An enterprise-grade, event-driven real-time messaging platform engineered with Spring Boot 3.5, Java 21, and React 19. Architected for high concurrency and zero data loss, the system separates sub-10ms real-time push delivery from unordered bulk database persistence using Apache Kafka (KRaft mode) with Apache Avro schemas. It coordinates distributed WebSocket sessions across multiple server nodes using Redis Hash routing and Pub/Sub, rejects invalid authentication attempts in O(1) time using Redis Cuckoo Filters, eliminates presence flapping via a 5-second distributed debounce queue, and provides end-to-end observability via ELK Stack, Prometheus, and Grafana.",
    image: "/chatweb_thumbnail.png",
    stack: [
      "Java 21",
      "Spring Boot 3.5",
      "Apache Kafka (KRaft)",
      "Apache Avro",
      "MongoDB 7",
      "PostgreSQL 16",
      "Redis Stack / RedisBloom",
      "WebSocket / STOMP",
      "React 19 / Vite",
      "Docker / Jib",
      "Prometheus & Grafana",
    ],
    highlights: [
      "Dual-Consumer Event-Driven Streaming: Decoupled real-time WebSocket delivery from database persistence using Kafka and Apache Avro; push consumer delivers messages to online users in < 10ms, while a write-behind consumer batches up to 200 records into MongoDB with Dead Letter Topic (DLT) retry isolation.",
      "Distributed Clustered WebSocket Routing: Engineered cross-server routing for stateful WebSocket connections behind Nginx using Redis Hash server mapping (ws:routing:servers) and server-specific Redis Pub/Sub channels, completely eliminating cluster broadcast storms.",
      "In-Memory Cuckoo Filter Preflight & Sliding Window Rate Limiting: Deployed RedisBloom Cuckoo Filters to validate usernames/emails in O(1) time in memory before hitting PostgreSQL, paired with atomic Redis Lua sliding-window rate limiters and multi-tier idempotency (@Idempotent).",
      "Flap-Free Distributed Presence Debouncing & Monotonic Read Receipts: Eliminated presence toggling during tab refreshes by queuing disconnects into a Redis Sorted Set with a 5-second deadline, and compressed read receipts using atomic MongoDB $max watermarks to prevent write amplification.",
      "Polyglot Persistence, Full Observability & Honest Trade-offs: Segregated data across PostgreSQL (ACID relational), MongoDB (high-throughput chat logs), and Redis Stack (caching & filters), monitored with ELK and Prometheus. (Limitation: High operational complexity requiring 7+ containers, and eventual consistency between relational and document stores).",
    ],
    architecture: [
      "React 19 SPA + WebSocket STOMP",
      "Nginx Reverse Proxy & TLS Verification",
      "Spring Boot 3.5 Gateway & Redis Cuckoo Preflight",
      "Kafka KRaft Event Bus (Dual Consumers)",
      "Polyglot DB (PostgreSQL + MongoDB + Redis)",
    ],
    url: "https://github.com/phwkha/ChatWeb-RealTime",
    accent: "#6366f1",
  },
];

const socialprofils = {
  github: "https://github.com/phwkha",
};

export { meta, introdata, logotext, skills, projects, socialprofils };
