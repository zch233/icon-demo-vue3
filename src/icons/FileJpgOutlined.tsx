// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import FileJpgOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileJpgOutlined';

export interface FileJpgOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileJpgOutlined: FileJpgOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={FileJpgOutlinedSvg} />
    ;

FileJpgOutlined.displayName = 'FileJpgOutlined';

export default FileJpgOutlined;