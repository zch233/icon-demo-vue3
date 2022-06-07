// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FileMarkdownOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileMarkdownOutlined';

export interface FileMarkdownOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileMarkdownOutlined: FileMarkdownOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FileMarkdownOutlinedSvg} />
    ;

FileMarkdownOutlined.displayName = 'FileMarkdownOutlined';

export default FunctionalComponent;