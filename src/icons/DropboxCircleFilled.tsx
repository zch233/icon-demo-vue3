// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import DropboxCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DropboxCircleFilled';

export interface DropboxCircleFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DropboxCircleFilled: DropboxCircleFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={DropboxCircleFilledSvg} />
    ;

DropboxCircleFilled.displayName = 'DropboxCircleFilled';

export default FunctionalComponent;