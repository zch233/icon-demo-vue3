// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FilePdfTwoToneSvg from '@ant-design/icons-svg/lib/asn/FilePdfTwoTone';

export interface FilePdfTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FilePdfTwoTone: FilePdfTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FilePdfTwoToneSvg} />
    ;

FilePdfTwoTone.displayName = 'FilePdfTwoTone';

export default FunctionalComponent;