import {
  BookOpen,
  ExternalLink,
  FileText,
  Database,
  Code2,
} from "lucide-react";
import "../styles/references.css";

const references = [
  {
    title: "PointNet++",
    type: "Deep Learning",
    description:
      "Hierarchical neural network architecture for learning features from point clouds.",
    source: "Qi et al.",
    link: "https://arxiv.org/abs/1706.02413",
  },
  {
    title: "PCSCNet",
    type: "LiDAR Segmentation",
    description:
      "Point convolution and sparse convolution approach for efficient 3D semantic segmentation.",
    source: "3D Semantic Segmentation",
    link: "https://arxiv.org/abs/2202.10047",
  },
  {
    title: "F-LOAM",
    type: "LiDAR Mapping",
    description:
      "Fast LiDAR odometry and mapping framework for efficient point-cloud processing.",
    source: "LiDAR Odometry",
    link: "https://arxiv.org/abs/2107.00822",
  },
  {
    title: "SemanticKITTI",
    type: "Dataset",
    description:
      "Large-scale sequential automotive LiDAR dataset with point-level semantic annotations.",
    source: "Automotive LiDAR",
    link: "https://www.semantic-kitti.org/",
  },
  {
    title: "KITTI Vision Benchmark",
    type: "Dataset",
    description:
      "Benchmark suite containing datasets for autonomous driving and computer vision.",
    source: "KITTI",
    link: "https://www.cvlibs.net/datasets/kitti/",
  },
  {
    title: "nuScenes",
    type: "Dataset",
    description:
      "Large-scale multimodal autonomous driving dataset with LiDAR and camera data.",
    source: "Motional",
    link: "https://www.nuscenes.org/",
  },
  {
    title: "Open3D",
    type: "Framework",
    description:
      "Open-source library for 3D data processing, visualization and geometry operations.",
    source: "Open Source",
    link: "https://www.open3d.org/",
  },
  {
    title: "ROS 2",
    type: "Robotics",
    description:
      "Robotics middleware suitable for integrating perception and autonomous systems.",
    source: "Open Robotics",
    link: "https://docs.ros.org/en/rolling/",
  },
  {
    title: "Lightweight 2.5D SLAM",
    type: "Research Paper",
    description:
      "Research on lightweight height-aware 2.5D mapping and dynamic map refinement.",
    source: "Sensors 2026",
    link: "https://www.mdpi.com/1424-8220/26/15/4765",
  },
];

function References() {
  return (
    <section className="references-page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">RESEARCH & SOURCES</span>
          <h2>References</h2>
          <p>
            Research papers, datasets and frameworks supporting the AgniVeda
            prototype.
          </p>
        </div>

        <div className="reference-count">
          <BookOpen size={17} />
          {references.length} SOURCES
        </div>
      </div>

      <div className="research-summary">
        <div className="summary-icon">
          <FileText size={22} />
        </div>

        <div>
          <span className="eyebrow">PROJECT RESEARCH BASE</span>
          <h3>LiDAR Perception + Adaptive Mapping</h3>
          <p>
            The prototype combines established point-cloud processing,
            semantic segmentation, automotive LiDAR datasets and 2.5D
            mapping research as the technical foundation for the proposed
            adaptive-resolution approach.
          </p>
        </div>
      </div>

      <div className="reference-grid">
        {references.map((item, index) => (
          <article className="reference-card" key={item.title}>
            <div className="reference-top">
              <span className="reference-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="reference-type">{item.type}</span>
            </div>

            <div className="reference-icon">
              {item.type === "Dataset" ? (
                <Database size={21} />
              ) : item.type === "Framework" || item.type === "Robotics" ? (
                <Code2 size={21} />
              ) : (
                <FileText size={21} />
              )}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <div className="reference-bottom">
              <span>{item.source}</span>

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${item.title}`}
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default References;