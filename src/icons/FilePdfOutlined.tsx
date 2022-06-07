// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FilePdfOutlinedSvg from '@ant-design/icons-svg/lib/asn/FilePdfOutlined';

export interface FilePdfOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FilePdfOutlined: FilePdfOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FilePdfOutlinedSvg} />
    ;

FilePdfOutlined.displayName = 'FilePdfOutlined';

export default FunctionalComponent;