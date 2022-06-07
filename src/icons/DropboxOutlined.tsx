// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import DropboxOutlinedSvg from '@ant-design/icons-svg/lib/asn/DropboxOutlined';

export interface DropboxOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DropboxOutlined: DropboxOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={DropboxOutlinedSvg} />
    ;

DropboxOutlined.displayName = 'DropboxOutlined';

export default FunctionalComponent;