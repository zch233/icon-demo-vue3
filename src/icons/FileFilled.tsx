// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FileFilledSvg from '@ant-design/icons-svg/lib/asn/FileFilled';

export interface FileFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileFilled: FileFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FileFilledSvg} />
    ;

FileFilled.displayName = 'FileFilled';

export default FunctionalComponent;