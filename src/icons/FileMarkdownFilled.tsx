// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FileMarkdownFilledSvg from '@ant-design/icons-svg/lib/asn/FileMarkdownFilled';

export interface FileMarkdownFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileMarkdownFilled: FileMarkdownFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FileMarkdownFilledSvg} />
    ;

FileMarkdownFilled.displayName = 'FileMarkdownFilled';

export default FunctionalComponent;