// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FilePptTwoToneSvg from '@ant-design/icons-svg/lib/asn/FilePptTwoTone';

export interface FilePptTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FilePptTwoTone: FilePptTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FilePptTwoToneSvg} />
    ;

FilePptTwoTone.displayName = 'FilePptTwoTone';

export default FunctionalComponent;