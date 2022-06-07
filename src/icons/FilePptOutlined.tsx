// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FilePptOutlinedSvg from '@ant-design/icons-svg/lib/asn/FilePptOutlined';

export interface FilePptOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FilePptOutlined: FilePptOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FilePptOutlinedSvg} />
    ;

FilePptOutlined.displayName = 'FilePptOutlined';

export default FunctionalComponent;