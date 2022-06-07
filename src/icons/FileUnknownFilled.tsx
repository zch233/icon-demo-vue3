// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FileUnknownFilledSvg from '@ant-design/icons-svg/lib/asn/FileUnknownFilled';

export interface FileUnknownFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileUnknownFilled: FileUnknownFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FileUnknownFilledSvg} />
    ;

FileUnknownFilled.displayName = 'FileUnknownFilled';

export default FunctionalComponent;