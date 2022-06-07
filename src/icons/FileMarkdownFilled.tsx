// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import FileMarkdownFilledSvg from '@ant-design/icons-svg/lib/asn/FileMarkdownFilled';

export interface FileMarkdownFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileMarkdownFilled: FileMarkdownFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={FileMarkdownFilledSvg} />
    ;

FileMarkdownFilled.displayName = 'FileMarkdownFilled';

export default FileMarkdownFilled;