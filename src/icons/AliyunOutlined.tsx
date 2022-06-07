// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import AliyunOutlinedSvg from '@ant-design/icons-svg/lib/asn/AliyunOutlined';

export interface AliyunOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const AliyunOutlined: AliyunOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={AliyunOutlinedSvg} />
    ;

AliyunOutlined.displayName = 'AliyunOutlined';

export default FunctionalComponent;